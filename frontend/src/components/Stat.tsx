export function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border bg-white/90 p-4">
      <div className="text-3xl leading-none font-bold">{value}</div>
      <div className="text-muted-foreground mt-1 text-sm">{label}</div>
    </div>
  )
}
