import LangSwitch from '@components/LangSwitch'
import { getLocaleFromPath } from '@lib/i18n'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

export default function SiteLayout() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const L = (en: string, es: string) => (locale === 'en' ? en : es)
  const base = `/${locale}`

  const nav = [
    { href: `${base}`, label: L('Home', 'Inicio') },
    { href: `${base}/${L('people', 'personas')}`, label: L('People', 'Personas') },
    { href: `${base}/${L('research', 'investigacion')}`, label: L('Research', 'Investigación') },
    {
      href: `${base}/${L('publications', 'publicaciones')}`,
      label: L('Publications', 'Publicaciones'),
    },
    { href: `${base}/${L('projects', 'proyectos')}`, label: L('Projects', 'Proyectos') },
    {
      href: `${base}/${L('facilities', 'infraestructura')}`,
      label: L('Facilities', 'Infraestructura'),
    },
    { href: `${base}/${L('news', 'noticias')}`, label: L('News/Events', 'Noticias/Eventos') },
    { href: `${base}/${L('open', 'datos')}`, label: L('Open data/code', 'Datos/Código') },
    { href: `${base}/${L('contact', 'contacto')}`, label: L('Contact/Visit', 'Contacto/Visita') },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link to="/en" className="font-semibold">
            BioMEMS @ IIUNAM
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {nav.map((i) => (
              <NavLink
                key={i.href}
                to={i.href}
                className={({ isActive }) =>
                  isActive ? 'font-semibold underline' : 'hover:underline'
                }
              >
                {i.label}
              </NavLink>
            ))}
            <LangSwitch />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} IIUNAM — BioMEMS Lab
        </div>
      </footer>
    </div>
  )
}
