import { motion } from 'motion/react'
import { focusIn, stagger } from '../motion'

export default function SectionHead({ index, title, accent, description }) {
  return (
    <motion.div className="section-head" variants={stagger(0.09, 0.05)} initial="hidden" animate="shown">
      <motion.span className="section-index mono" variants={focusIn}>{index}</motion.span>
      <motion.h1 className="section-title" variants={focusIn}>
        {title} {accent && <span className="accent-text">{accent}</span>}
      </motion.h1>
      {description && <motion.p className="section-desc" variants={focusIn}>{description}</motion.p>}
    </motion.div>
  )
}
