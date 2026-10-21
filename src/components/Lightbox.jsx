import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import { mediaId, spring } from '../motion'

const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

const slide = {
  enter: (dir) => ({ opacity: 0, x: dir * 80, scale: 0.94 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir * -80, scale: 0.94 }),
}

// Full-screen image viewer. Arrow keys, buttons or swipes move between items;
// Esc, a backdrop tap or a downward swipe closes it.
export default function Lightbox({ items, index, onChange, onClose }) {
  const [start] = useState(index) // the image that was clicked, which zooms in from its thumbnail
  const [dir, setDir] = useState(0)
  const item = items[index]
  const hasMany = items.length > 1

  const go = (step) => {
    setDir(step)
    onChange((index + step + items.length) % items.length)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (hasMany && e.key === 'ArrowRight') {
        setDir(1)
        onChange((index + 1) % items.length)
      }
      if (hasMany && e.key === 'ArrowLeft') {
        setDir(-1)
        onChange((index - 1 + items.length) % items.length)
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.documentElement.classList.add('lightbox-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.documentElement.classList.remove('lightbox-open')
    }
  }, [index, items.length, hasMany, onChange, onClose])

  const onDragEnd = (_, { offset, velocity }) => {
    if (offset.y > 120 || velocity.y > 800) onClose()
    else if (hasMany && (offset.x < -80 || velocity.x < -600)) go(1)
    else if (hasMany && (offset.x > 80 || velocity.x > 600)) go(-1)
  }

  // Only the first image is linked to its thumbnail; after browsing, images slide instead.
  const shared = index === start && dir === 0

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption}>
      <motion.div className="lightbox-backdrop" {...fade} transition={{ duration: 0.3 }} onClick={onClose} />

      <div className="lightbox-stage" onClick={onClose}>
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={item.image}
            className="lightbox-img"
            src={item.image}
            alt={item.caption}
            decoding="async"
            layoutId={shared ? mediaId(item.image) : undefined}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit={shared ? undefined : 'exit'}
            transition={spring.bouncy}
            drag
            dragSnapToOrigin
            dragElastic={0.5}
            dragDirectionLock
            onDragEnd={onDragEnd}
            onClick={(e) => e.stopPropagation()}
          />
        </AnimatePresence>
      </div>

      <motion.div className="lightbox-bar liquid" {...fade} transition={{ ...spring.smooth, delay: 0.1 }}>
        <span>{item.caption}</span>
        {hasMany && <span className="lightbox-count">{index + 1} / {items.length}</span>}
        <button className="icon-btn" onClick={onClose} aria-label="Close" autoFocus>
          <FaXmark />
        </button>
      </motion.div>

      {hasMany && (
        <>
          <motion.button className="icon-btn liquid lightbox-nav prev" {...fade} onClick={() => go(-1)} aria-label="Previous">
            <FaChevronLeft />
          </motion.button>
          <motion.button className="icon-btn liquid lightbox-nav next" {...fade} onClick={() => go(1)} aria-label="Next">
            <FaChevronRight />
          </motion.button>
        </>
      )}
    </div>
  )
}
