import { FaCertificate, FaGraduationCap, FaLocationDot } from 'react-icons/fa6'
import { about, gallery, profile, skills } from '../data'
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
        <Reveal className="about-text">
          <h2>
            Hello, I&apos;m <span className="accent">Jairus Carl</span>
          </h2>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="info-card" delay={150}>
          <img className="info-avatar" src={profile.photo} alt="" />
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
        Technical <span className="accent">Skills</span>
      </h2>
      <ul className="skills-grid">
        {skills.map(({ name, icon: Icon, color }, i) => (
          <Reveal as="li" className="skill-card" key={name} delay={i * 25} style={{ '--brand': color }}>
            <Icon className="skill-icon" aria-hidden="true" />
            <span className="skill-name">{name}</span>
          </Reveal>
        ))}
      </ul>

      <h2 className="sub-title">
        Beyond the <span className="accent">Code</span>
      </h2>
      <p className="sub-desc">Leadership, service, and discipline from CAT, NROTC, and the gym. Proof that I do go outside sometimes.</p>
      <ul className="gallery">
        {gallery.map((item, i) => (
          <Reveal as="li" key={item.image} delay={(i % 4) * 60}>
            <button className="gallery-item" onClick={() => onOpenImage(gallery, i)}>
              <img src={item.image} alt={item.caption} loading="lazy" />
              <span className="gallery-caption">{item.caption}</span>
            </button>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
