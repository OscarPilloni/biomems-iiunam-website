import type { ReactNode } from 'react'

import { Badge } from './Badge'

type PersonCardProps = {
  name: string
  role: string
  email?: string
  orcid?: string
  scholar?: string
  website?: string
  avatarUrl?: string
  extra?: ReactNode
}

export function PersonCard({
  name,
  role,
  email,
  orcid,
  scholar,
  website,
  avatarUrl,
  extra,
}: PersonCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl border bg-white/90 p-4 shadow-sm">
      <img
        alt={name}
        src={
          avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`
        }
        className="size-16 rounded-xl object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Badge>{role}</Badge>
        </div>
        <div className="text-muted-foreground mt-1 flex flex-wrap gap-3 text-sm">
          {email && (
            <a className="underline" href={`mailto:${email}`}>
              Email
            </a>
          )}
          {orcid && (
            <a className="underline" href={orcid} target="_blank" rel="noreferrer">
              ORCID
            </a>
          )}
          {scholar && (
            <a className="underline" href={scholar} target="_blank" rel="noreferrer">
              Google Scholar
            </a>
          )}
          {website && (
            <a className="underline" href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          )}
          {extra}
        </div>
      </div>
    </div>
  )
}
