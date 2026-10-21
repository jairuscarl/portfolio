import { motion } from 'motion/react'
import { focusIn } from '../motion'

// Brings its children into focus (rise + fade + un-blur) the first time they scroll into view.
export default function Reveal({ as = 'div', delay = 0, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      variants={focusIn}
      custom={delay / 1000}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
