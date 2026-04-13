import { getAllInternships, Internship } from '@/lib/strapi'
import Link from 'next/link'

// ==============================
// SORTING
// ==============================
const statusPriority: Record<string, number> = {
  Open: 0,
  'Closing Soon': 1,
  Pending: 2,
  Filled: 3,
}

function sortInternships(list: Internship[]) {
  return [...list].sort((a, b) => {
    const aPriority = statusPriority[a.status] ?? 99
    const bPriority = statusPriority[b.status] ?? 99

    if (aPriority !== bPriority) {
      return aPriority - bPriority
    }

    return a.title.localeCompare(b.title)
  })
}

// ==============================
// PAGE
// ==============================
export default async function InternshipsPage() {
  const internships = await getAllInternships()
  const sorted = sortInternships(internships)

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">

          {/* HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#00349B]">
              Internship Positions
            </h1>
            <p className="text-gray-600 mt-2">
              Apply to your passion
            </p>
          </div>

          {/* CONTENT */}
          {sorted.length === 0 ? (
            <p className="text-center text-gray-500">
              No internships available at the moment.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map((internship) => {

                const getStatusClass = () => {
                  if (internship.status === 'Open')
                    return 'bg-green-100 text-green-800'

                  if (internship.status === 'Filled')
                    return 'bg-gray-100 text-gray-800'

                  return 'bg-yellow-100 text-yellow-800'
                }

                return (
                  <div
                    key={internship.id}
                    className="p-6 border rounded-lg hover:shadow-lg transition"
                  >
                  <Link href={`/opportunities/internships/${internship.slug}`}>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {internship.title}
                    </h3>

                    <span className={`px-2 py-1 text-xs rounded text-black ${getStatusClass()}`}>
                      {internship.status}
                    </span>

                    {internship.location && (
                      <p className="text-sm text-gray-500 mt-2">
                        {internship.location}
                      </p>
                    )}
                    </Link>
                  </div>

                )
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}