import { getLocaleFromPath, switchLocalePath } from '@lib/i18n'
import { Link,useLocation } from 'react-router-dom'

export default function LangSwitch() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const toEN = switchLocalePath(pathname, 'en')
  const toES = switchLocalePath(pathname, 'es')
  return (
    <div className="flex items-center gap-2 text-sm">
      <Link to={toEN} className={locale === 'en' ? 'font-semibold underline' : 'hover:underline'}>
        EN
      </Link>
      <span aria-hidden>/</span>
      <Link to={toES} className={locale === 'es' ? 'font-semibold underline' : 'hover:underline'}>
        ES
      </Link>
    </div>
  )
}
