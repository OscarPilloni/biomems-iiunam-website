import { PersonCard } from '@components/PersonCard'
import Section from '@components/Section'

export default function PeopleEN() {
  return (
    <Section title="People" subtitle="Principal Investigator, students, and alumni.">
      <h2 className="text-xl font-semibold">Principal Investigator</h2>
      <div className="grid gap-4">
        <PersonCard
          name="Your Name"
          role="PI"
          email="name@ii.unam.mx"
          orcid="https://orcid.org/"
          scholar="https://scholar.google.com/"
        />
      </div>

      <h2 className="mt-8 text-xl font-semibold">Students</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Map students here */}
        <PersonCard name="Student A" role="MSc" />
        <PersonCard name="Student B" role="BSc" />
      </div>

      <h2 className="mt-8 text-xl font-semibold">Alumni</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PersonCard name="Alumn X" role="Alumni — 2024" />
      </div>
    </Section>
  )
}
