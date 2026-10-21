import { useEffect, useRef } from 'react'

// Slow-drifting color fields that give the glass something to blur.
// Every frame they move, every glass surface on screen has to re-blur its backdrop, so the drift
// pauses while the page is scrolling (the content is moving anyway, so the pause can't be seen).
export default function Backdrop() {
  const ref = useRef(null)

  useEffect(() => {
    let timer
    const onScroll = () => {
      ref.current.classList.add('is-paused')
      clearTimeout(timer)
      timer = setTimeout(() => ref.current?.classList.remove('is-paused'), 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="backdrop" ref={ref} aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
    </div>
  )
}
