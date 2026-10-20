import Reveal from './Reveal'

export default function SectionHead({ index, title, accent, description }) {
  return (
    <Reveal className="section-head">
      <span className="section-index">{index}</span>
      <h1 className="section-title">
        {title} {accent && <span className="accent">{accent}</span>}
      </h1>
      {description && <p className="section-desc">{description}</p>}
    </Reveal>
  )
}
