import Link from 'next/link'
import { getAllInternships, Internship } from '@/lib/strapi'

const statusPriority: Record<string, number> = {
  Open: 0,
  'Closing Soon': 1,
  Pending: 2,
  Filled: 3,
}

type SafeInternship = Internship & {
  title: string
  slug: string
}

function sortInternships(list: Internship[]): SafeInternship[] {
  return list
    .filter((item): item is SafeInternship => !!item.title && !!item.slug)
    .sort((a, b) => {
      const aPriority = statusPriority[a.status ?? ''] ?? 99
      const bPriority = statusPriority[b.status ?? ''] ?? 99

      if (aPriority !== bPriority) {
        return aPriority - bPriority
      }

      return a.title.localeCompare(b.title)
    })
}

export default async function InternshipsPage() {
  const internships = await getAllInternships()
  const sorted = sortInternships(internships)

  return (
    <div>
      {sorted.map((internship) => (
        <div key={internship.id}>
          {internship.title}
        </div>
      ))}
    </div>
  )
}