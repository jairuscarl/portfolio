import { motion } from 'motion/react'
import { FaCertificate, FaGraduationCap, FaLocationDot } from 'react-icons/fa6'
import { about, gallery, profile, skills } from '../data'
import { mediaId } from '../motion'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

export default function About({ onOpenImage }) {
  return (
    <section className="page shell">
      <SectionHead
        index="01"
        title="About"
        accent="Me"
        description="IT student, developer, and certified professional Googler on a mission to master the craft."
      />

      <div className="about-grid">
        <Reveal className="about-text glass is-thin">
          <h2>
            Hello, I&apos;m <span className="accent-text">Jairus Carl</span>
          </h2>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="info-card glass is-thick" delay={150}>
          <img className="info-avatar" src={profile.photo} alt="" decoding="async" />
          <div className="info-name">{profile.name}</div>
          <div className="info-role">{profile.role}</div>
          <ul className="info-list">
            <li><FaGraduationCap /> {profile.school}</li>
            <li><FaLocationDot /> {profile.location}</li>
            <li><FaCertificate /> TESDA NC II Certified</li>
          </ul>
        </Reveal>
      </div>

      <h2 className="sub-title">
        Technical <span className="accent-text">Skills</span>
      </h2>
      <ul className="skills-grid">
        {skills.map(({ name, icon: Icon, color }, i) => (
          <Reveal as="li" key={name} delay={i * 30}>
            <div className="skill-card glass-lite" style={{ '--brand': color }}>
              <Icon className="skill-icon" aria-hidden="true" />
              <span className="skill-name">{name}</span>
            </div>
          </Reveal>
        ))}
      </ul>

      <h2 className="sub-title">
        Beyond the <span className="accent-text">Code</span>
      </h2>
      <p className="sub-desc">Leadership, service, and discipline from CAT, NROTC, and the gym. Proof that I do go outside sometimes.</p>
      <ul className="gallery">
        {gallery.map((item, i) => (
          <Reveal as="li" key={item.image} delay={(i % 4) * 70}>
            <button className="gallery-item" onClick={() => onOpenImage(gallery, i)}>
              <motion.img layoutId={mediaId(item.image)} src={item.image} alt={item.caption} loading="lazy" decoding="async" />
              <span className="gallery-caption glass">{item.caption}</span>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
