import React from 'react'

type CardProps = {
  title?: string
  eyebrow?: string
  footer?: React.ReactNode
  children?: React.ReactNode
  as?: React.ElementType
  href?: string
} & React.HTMLAttributes<HTMLElement>

export function Card({ title, eyebrow, footer, children, as, href, ...rest }: CardProps) {
  const Tag = (as ?? 'article') as React.ElementType

  const content = (
    <Tag
      className="rounded-2xl border bg-white/90 p-4 shadow-sm transition hover:shadow-md"
      {...rest}
    >
      {eyebrow && (
        <div className="text-muted-foreground text-xs tracking-wide uppercase">{eyebrow}</div>
      )}
      {title && <h3 className="mt-1 text-lg font-semibold">{title}</h3>}
      {children && <div className="text-foreground/90 mt-2 text-sm">{children}</div>}
      {footer && <div className="text-muted-foreground mt-3 border-t pt-3 text-sm">{footer}</div>}
    </Tag>
  )

  if (href) {
    return (
      <a href={href} className="block text-inherit no-underline">
        {content}
      </a>
    )
  }
  return content
}
