import { Card } from '@components/Card'
import Section from '@components/Section'

export default function NewsEN() {
  return (
    <Section title="News & Events" subtitle="Talks, awards, calls for students.">
      <div className="grid gap-4">
        {/* Render news items sorted by date; archive older items */}
        <Card eyebrow="2025‑09‑01" title="Example talk at Conference X">
          <p>Slides and abstract link.</p>
        </Card>
        <Card eyebrow="2025‑08‑15" title="Seeking MSc student for DEP project">
          <p>How to apply and expected background.</p>
        </Card>
      </div>
    </Section>
  )
}
