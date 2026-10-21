// Shared spring presets so every animation on the site moves with the same physics.
export const spring = {
  snappy: { type: 'spring', visualDuration: 0.3, bounce: 0.15 }, // toggles, presses
  smooth: { type: 'spring', visualDuration: 0.5, bounce: 0.1 }, // cards, pages, reveals
  bouncy: { type: 'spring', visualDuration: 0.45, bounce: 0.3 }, // sliding pills, lightbox
}

// Content comes into focus: rises, fades in, and sharpens from a blur.
// The blur animates to `none`, not blur(0px): any leftover filter would stop glass inside from blurring the backdrop.
export const focusIn = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  shown: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'none',
    transition: { ...spring.smooth, delay },
  }),
}

// Shared id linking a thumbnail to its full-size copy in the lightbox, so the image grows out of the grid.
export const mediaId = (src) => `media-${src}`

export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  shown: { transition: { staggerChildren: gap, delayChildren: delay } },
})
