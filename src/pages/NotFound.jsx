import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="page shell not-found">
      <span className="section-index">404</span>
      <h1 className="section-title">
        Page not <span className="accent">found</span>
      </h1>
      <p className="section-desc">This page skipped leg day and couldn&apos;t make it. Let&apos;s get you somewhere that exists.</p>
      <Link className="btn btn-primary" to="/">Back to home</Link>
    </section>
  )
}
