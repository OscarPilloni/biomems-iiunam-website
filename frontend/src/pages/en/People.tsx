import { PersonCard } from '@components/PersonCard'
import Section from '@components/Section'
import { getAlumni,getPI, getStudents } from '@lib/people'

export default function PeopleEN() {
  const pi = getPI('en')
  const students = getStudents('en')
  const alumni = getAlumni('en')

  return (
    <Section title="People" subtitle="Principal Investigator, students, and alumni.">
      <h2 className="text-xl font-semibold">Principal Investigator</h2>
      <div className="grid gap-4">
        {pi.map((p) => (
          <PersonCard
            key={p.id}
            name={p.name}
            role={p.role}
            email={p.email}
            orcid={p.orcid}
            scholar={p.scholar}
            website={p.website}
            avatarUrl={p.avatarUrl}
          />
        ))}
      </div>

      <h2 className="mt-8 text-xl font-semibold">Students</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {students.map((p) => (
          <PersonCard
            key={p.id}
            name={p.name}
            role={p.role}
            email={p.email}
            orcid={p.orcid}
            scholar={p.scholar}
            website={p.website}
            avatarUrl={p.avatarUrl}
          />
        ))}
      </div>

      <h2 className="mt-8 text-xl font-semibold">Alumni</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {alumni.map((p) => (
          <PersonCard
            key={p.id}
            name={p.name}
            role={p.role}
            avatarUrl={p.avatarUrl}
            extra={p.period ? <span>{p.period}</span> : null}
          />
        ))}
      </div>
    </Section>
  )
}
