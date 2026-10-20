import { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'

// Full-screen image viewer. Arrow keys / buttons move between items, Esc or backdrop click closes.
export default function Lightbox({ items, index, onChange, onClose }) {
  const item = items[index]
  const hasMany = items.length > 1
  const go = (step) => onChange((index + step + items.length) % items.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (hasMany && e.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (hasMany && e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, items.length, hasMany, onChange, onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={onClose}>
      <figure className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <figcaption className="lightbox-header">
          <span>{item.caption}</span>
          {hasMany && <span className="lightbox-count">{index + 1} / {items.length}</span>}
          <button className="icon-btn" onClick={onClose} aria-label="Close" autoFocus>
            <FaXmark />
          </button>
        </figcaption>
        <div className="lightbox-body">
          <img src={item.image} alt={item.caption} />
          {hasMany && (
            <>
              <button className="icon-btn lightbox-nav prev" onClick={() => go(-1)} aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="icon-btn lightbox-nav next" onClick={() => go(1)} aria-label="Next">
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
      </figure>
    </div>
  )
}
