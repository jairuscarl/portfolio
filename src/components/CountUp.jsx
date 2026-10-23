import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

// Counts a number up from zero when it scrolls into view. Non-numbers render as-is.
export default function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()
  const isNumber = typeof value === 'number'

  useEffect(() => {
    if (!isNumber || !inView || reduced) return
    // Hold on to the element: React clears ref.current before this effect's cleanup runs, and
    // controls.stop() fires one last onUpdate, so leaving Home mid-count used to crash the whole app.
    const el = ref.current
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { el.textContent = Math.round(v) },
    })
    return () => controls.stop()
  }, [isNumber, inView, reduced, value])

  return <span ref={ref}>{isNumber && !reduced ? 0 : value}</span>
}
