import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Link } from 'react-router'
import { highlights, profile } from '../data'
import { useTilt } from '../hooks'
import { focusIn, spring, stagger } from '../motion'
import CountUp from '../components/CountUp'

export default function Home() {
  const hero = useRef(null)
  const tilt = useTilt(8)

  // apple.com-style scroll choreography: the headline recedes and the portrait drifts as you scroll away.
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] })
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.86])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section className="hero shell" ref={hero}>
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          variants={stagger(0.09, 0.15)}
          initial="hidden"
          animate="shown"
          style={{ opacity: contentOpacity }}
        >
          <motion.div className="kicker liquid is-thin" variants={focusIn}>
            <span className="kicker-dot" aria-hidden="true" />
            {profile.role}
          </motion.div>
          <motion.h1 className="hero-name" variants={focusIn} style={{ scale: nameScale }}>
            {profile.firstName}
            <br />
            <span className="accent-text">{profile.lastName}</span>
          </motion.h1>
          <motion.p className="hero-role" variants={focusIn}>{profile.tagline}</motion.p>
          <motion.p className="hero-desc" variants={focusIn}>{profile.intro}</motion.p>
          <motion.div className="hero-cta" variants={focusIn}>
            <Link className="btn btn-primary" to="/projects">View my projects</Link>
            <Link className="btn liquid" to="/about">About me</Link>
          </motion.div>
          <motion.dl className="hero-stats glass is-thin" variants={focusIn}>
            {highlights.map(({ value, label }) => (
              <div className="hero-stat" key={label}>
                <dt>{label}</dt>
                <dd><CountUp value={value} /></dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div className="hero-visual" style={{ y: portraitY, scale: portraitScale }}>
          <motion.div
            className="portrait-frame liquid"
            initial={{ opacity: 0, scale: 0.85, rotate: -4, filter: 'blur(16px)' }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'none' }}
            transition={{ ...spring.bouncy, delay: 0.35 }}
            {...tilt}
          >
            <img src={profile.photo} alt={profile.name} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
