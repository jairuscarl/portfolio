import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaExpand } from 'react-icons/fa6'
import { certificateFilters, certificates } from '../data'
import { mediaId, spring } from '../motion'
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

      <Reveal className="segmented liquid" role="group" aria-label="Filter certificates">
        {certificateFilters.map(({ id, label }) => (
          <button
            key={id}
            className={`segment ${filter === id ? 'is-active' : ''}`}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {filter === id && <motion.span className="segment-pill" layoutId="segment-pill" transition={spring.bouncy} />}
            <span>{label}</span>
            <span className="segment-count">{countFor(id)}</span>
          </button>
        ))}
      </Reveal>

      {/* Cards that stay glide to their new spot; the rest shrink away or grow in. */}
      <ul className="cards-grid" style={{ position: 'relative' }}>
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((cert, i) => (
            <Reveal
              as="li"
              key={cert.title}
              delay={(i % 3) * 100}
              layout
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.25 } }}
            >
              <article className="card glass">
                <button
                  className="card-media card-media-btn"
                  onClick={() => onOpenImage(shown.map((c) => ({ image: c.image, caption: c.title })), i)}
                  aria-label={`View ${cert.title} certificate`}
                >
                  <motion.img layoutId={mediaId(cert.image)} src={cert.image} alt="" loading="lazy" />
                  <span className="card-media-hint liquid"><FaExpand aria-hidden="true" /> View</span>
                </button>
                <div className="card-body">
                  <span className="card-eyebrow">{cert.issuer}</span>
                  <h3 className="card-title">{cert.title}</h3>
                  <p className="card-text">{cert.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
