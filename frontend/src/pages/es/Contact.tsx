import Section from '@components/Section'

export default function ContactoES() {
  return (
    <Section title="Contacto y visita" subtitle="Mapa, dirección, correo y redes sociales.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Dirección</h2>
          <p>Instituto de Ingeniería, UNAM — Ciudad Universitaria, CDMX.</p>
          <div className="space-y-1 text-sm">
            <div>
              <span className="font-medium">Correo:</span>{' '}
              <a className="underline" href="mailto:lab@ii.unam.mx">
                lab@ii.unam.mx
              </a>
            </div>
            <div>
              <span className="font-medium">Twitter/X:</span>{' '}
              <a className="underline" href="#">
                @biomems
              </a>
            </div>
            <div>
              <span className="font-medium">GitHub:</span>{' '}
              <a className="underline" href="#">
                org/repo
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-muted-foreground grid aspect-video w-full place-items-center rounded-2xl border bg-gray-50 text-sm">
            Mapa (placeholder)
          </div>
        </div>
      </div>
    </Section>
  )
}
