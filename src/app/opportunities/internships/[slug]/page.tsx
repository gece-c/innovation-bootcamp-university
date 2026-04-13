import { getInternship } from '@/lib/strapi'
import { HubSpotForm } from '@/components/hubspot-form'


// ==============================
// TYPES
// ==============================
type PageProps = {
  params: Promise<{ slug: string }>
}

type ParsedInternshipContent = {
  overview: string[]
  responsibilities: string[]
  qualifications: string[]
  whyJoinUs: string[]
}

// ==============================
// CONFIG (optional)
// ==============================
export const revalidate = 60

// ==============================
// HELPERS (PARSER)
// ==============================
const normalizeText = (value: string) =>
  value.replace(/\r/g, '').replace(/\u00A0/g, ' ').trim()

const cleanItem = (value: string) =>
  normalizeText(value)
    .replace(/^[-•●■▪◦]+\s*/, '')
    .trim()

const isOverviewHeading = (value: string) => /^overview$/i.test(value)
const isResponsibilitiesHeading = (value: string) =>
  /^key responsibilities$/i.test(value)
const isQualificationsHeading = (value: string) =>
  /^qualifications and skills$/i.test(value) ||
  /^qualifications\s*&\s*skills$/i.test(value)
const isWhyJoinUsHeading = (value: string) =>
  /^why join us\??$/i.test(value)

// ==============================
// PARSER FUNCTION
// ==============================
function parseInternshipContent(raw?: string): ParsedInternshipContent {
  const result: ParsedInternshipContent = {
    overview: [],
    responsibilities: [],
    qualifications: [],
    whyJoinUs: [],
  }

  if (!raw) return result

  const blocks = raw
    .split(/\n\s*\n+/)
    .map(normalizeText)
    .filter(Boolean)

  let currentSection: keyof ParsedInternshipContent = 'overview'

  for (const block of blocks) {
    if (isOverviewHeading(block)) {
      currentSection = 'overview'
      continue
    }

    if (isResponsibilitiesHeading(block)) {
      currentSection = 'responsibilities'
      continue
    }

    if (isQualificationsHeading(block)) {
      currentSection = 'qualifications'
      continue
    }

    if (isWhyJoinUsHeading(block)) {
      currentSection = 'whyJoinUs'
      continue
    }

    result[currentSection].push(cleanItem(block))
  }

  return result
}

// ==============================
// SPLIT "WHY JOIN US"
// ==============================
function splitWhyJoinItem(item: string) {
  const cleaned = cleanItem(item)
  const match = cleaned.match(/^([^:]+):\s*(.+)$/)

  if (!match) {
    return {
      title: '',
      description: cleaned,
    }
  }

  return {
    title: `${match[1].trim()}:`,
    description: match[2].trim(),
  }
}

// ==============================
// PAGE
// ==============================
export default async function InternshipPage(props: PageProps) {
  const { slug } = await props.params

  const internship = await getInternship(slug)

  if (!internship) {
    return <div className="p-10">Internship not found</div>
  }

  const parsed = parseInternshipContent(internship.description)

  console.log(internship.hubspotFormId, "any")

  return (
    <section className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <article className="internship-detail">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 leading-tight">
            {internship.title}
          </h1>


          {/* OVERVIEW */}
          {parsed.overview.length > 0 && (
            <div className="mb-12 text-white">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-gray-200">
                Overview
              </h2>

              <div className="text-lg text-gray-700 space-y-5">
                {parsed.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* RESPONSIBILITIES */}
          {parsed.responsibilities.length > 0 && (
            <div className="mb-12 text-white">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-gray-200">
                Key Responsibilities
              </h2>

              <ul className="space-y-4">
                {parsed.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-[#00349B] font-bold mr-3">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* QUALIFICATIONS */}
          {parsed.qualifications.length > 0 && (
            <div className="mb-12 text-white">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-gray-200">
                Qualifications and Skills
              </h2>

              <ul className="space-y-4">
                {parsed.qualifications.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-[#00349B] font-bold mr-3">■</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WHY JOIN US */}
          {parsed.whyJoinUs.length > 0 && (
            <div className="mb-12 text-white">
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-gray-200">
                Why Join Us?
              </h2>

              <div className="space-y-6">
                {parsed.whyJoinUs.map((item, index) => {
                  const entry = splitWhyJoinItem(item)

                  return (
                    <div key={index}>
                      {entry.title ? (
                        <>
                          <p className="font-semibold mb-2 text-white">{entry.title}</p>
                          <p className="text-gray-700">{entry.description}</p>
                        </>
                      ) : (
                        <p className="text-gray-700">{entry.description}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

            {/* APPLY SECTION */}
              <div className="mt-16 pt-12 border-t-2 border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-[#00349B]">
                    Apply for This Position
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ready to join our team? Fill out the application form below.
                  </p>
                </div>

                {internship.hubspotFormId ? (
                  <HubSpotForm formId={internship.hubspotFormId} />
                ) : (
                  <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg border text-center">
                    <p className="text-gray-600 text-lg">
                      Application form is not available yet.
                    </p>
                  </div>
                )}
              </div>

        </article>
      </div>
    </section>
  )
}