// src/components/LangSwitch.tsx
import { getLangFromPath, getPageKeyFromPath,type Lang, pathFor } from '@lib/routes'
import { useLocation, useNavigate } from 'react-router-dom'

export default function LangSwitch() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const current: Lang = getLangFromPath(pathname) ?? 'en'
  const pageKey = getPageKeyFromPath(pathname) ?? 'home'

  const go = (lang: Lang) => navigate(pathFor(pageKey, lang))

  const base =
    'inline-flex items-center px-3 py-1.5 text-sm font-medium border rounded-md transition'
  const active = 'bg-slate-900 text-white border-slate-900'
  const inactive = 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'

  return (
    <div className="inline-flex gap-1" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => go('en')}
        className={`${base} ${current === 'en' ? active : inactive}`}
        aria-current={current === 'en' ? 'page' : undefined}
        aria-pressed={current === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => go('es')}
        className={`${base} ${current === 'es' ? active : inactive}`}
        aria-current={current === 'es' ? 'page' : undefined}
        aria-pressed={current === 'es'}
      >
        ES
      </button>
    </div>
  )
}
