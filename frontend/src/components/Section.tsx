import React from 'react'

type SectionProps = {
  title: string
  subtitle?: string
  actions?: React.ReactNode
  children: React.ReactNode
}

export default function Section({ title, subtitle, actions, children }: SectionProps) {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
        </div>
        {actions && <div className="flex gap-2">{actions}</div>}
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  )
}
