import { useState } from 'react'
import { FaExpand } from 'react-icons/fa6'
import { certificateFilters, certificates } from '../data'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

const countFor = (id) => (id === 'all' ? certificates.length : certificates.filter((c) => c.category === id).length)

export default function Certificates({ onOpenImage }) {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? certificates : certificates.filter((c) => c.category === filter)

  return (
    <section className="page shell">
      <SectionHead
        index="03"
        title="Certificates &"
        accent="Achievements"
        description="Proof that I don't just Google things. I finish the courses too. Click any card to see it up close."
      />

      <div className="filters" role="group" aria-label="Filter certificates">
        {certificateFilters.map(({ id, label }) => (
          <button
            key={id}
            className={`filter-btn ${filter === id ? 'is-active' : ''}`}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label} <span className="filter-count">{countFor(id)}</span>
          </button>
        ))}
      </div>

      <ul className="cards-grid">
        {shown.map((cert, i) => (
          <Reveal as="li" className="card" key={cert.title} delay={(i % 3) * 100}>
            <button
              className="card-media card-media-btn"
              onClick={() => onOpenImage(shown.map((c) => ({ image: c.image, caption: c.title })), i)}
              aria-label={`View ${cert.title} certificate`}
            >
              <img src={cert.image} alt="" loading="lazy" />
              <span className="card-media-hint"><FaExpand aria-hidden="true" /> View</span>
            </button>
            <div className="card-body">
              <span className="card-eyebrow">{cert.issuer}</span>
              <h3 className="card-title">{cert.title}</h3>
              <p className="card-text">{cert.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
