import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">404 — Not Found</h1>
      <p>
        Try{' '}
        <Link to="/en" className="underline">
          /en
        </Link>{' '}
        or{' '}
        <Link to="/es" className="underline">
          /es
        </Link>
        .
      </p>
    </div>
  )
}
