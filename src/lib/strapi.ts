const CONTENT_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const CONTENT_STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

// ==============================
// GENERIC TYPES
// ==============================
interface StrapiResponse<T> {
  data: T;
}

// ==============================
// RAW DATA (from Strapi)
// ==============================
interface InternshipRaw {
  title?: string;
  name?: string;
  slug?: string;
  status?: "Open" | "Closed" | "Filled";
  internship_status?: string;
  location?: string;
  description?: string;
  hubspotFormId?: string
}

// ==============================
// SUPPORT BOTH STRAPI FORMATS
// ==============================

// v4 → { id, attributes: {...} }
// v5 → { id, title, slug, ... }
type StrapiInternship =
  | {
      id: number;
      attributes: InternshipRaw;
    }
  | (InternshipRaw & { id: number });

// ==============================
// CLEAN DATA 
// ==============================
export interface Internship {
  id: number;
  title: string;
  slug: string;
  status: "Open" | "Closed" | "Filled";
  location: string;
  description: string;
  hubspotFormId?: string
}

// ==============================
// NORMALIZER 
// ==============================
function normalizeInternship(item: StrapiInternship): Internship {
  const attr =
    "attributes" in item ? item.attributes : item;

  const status = attr.status ?? attr.internship_status ?? "Filled";

  return {
    id: item.id,
    title: (attr.title ?? attr.name ?? "Untitled").trim(),
    slug: attr.slug ?? "",
    status: status as Internship["status"],
    location: attr.location ?? "",
    description: attr.description ?? "",
    hubspotFormId: attr.hubspotFormId ?? ""
  };
}

// ==============================
// FETCH
// ==============================
async function fetchContentAPI<T>(path: string): Promise<T> {
  if (!CONTENT_STRAPI_URL) {
    throw new Error("Missing NEXT_PUBLIC_STRAPI_URL");
  }

  const url = `${CONTENT_STRAPI_URL.replace(/\/$/, "")}/api${path}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(CONTENT_STRAPI_API_TOKEN && {
        Authorization: `Bearer ${CONTENT_STRAPI_API_TOKEN}`,
      }),
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Strapi error:", errorText);
    throw new Error(`Error ${res.status}`);
  }

  return res.json();
}

// ==============================
// GET ALL INTERNSHIPS
// ==============================
export async function getAllInternships(): Promise<Internship[]> {
  try {
    const response = await fetchContentAPI<
      StrapiResponse<StrapiInternship[]>
    >("/internships?populate=*");

    return (response.data || []).map(normalizeInternship);
  } catch (error) {
    console.error("Failed to fetch internships:", error);
    return [];
  }
}

// ==============================
// GET ONE INTERNSHIP
// ==============================
export async function getInternship(slug: string): Promise<Internship | null> {
  try {
    const response = await fetchContentAPI<
      StrapiResponse<StrapiInternship[]>
    >(`/internships?filters[slug][$eq]=${slug}&populate=*`);

    const item = response.data?.[0];

    return item ? normalizeInternship(item) : null;
  } catch (error) {
    console.error("Failed to fetch internship:", error);
    return null;
  }
}