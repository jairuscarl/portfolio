import { Link } from 'react-router'
import SectionHead from '../components/SectionHead'

export default function NotFound() {
  return (
    <section className="page shell not-found">
      <SectionHead
        index="404"
        title="Page not"
        accent="found"
        description="This page skipped leg day and couldn't make it. Let's get you somewhere that exists."
      />
      <Link className="btn btn-primary" to="/">Back to home</Link>
    </section>
  )
}
