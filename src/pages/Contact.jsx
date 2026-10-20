import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { profile, socials } from '../data'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

export default function Contact() {
  const details = [
    { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: FaLocationDot, label: profile.location },
  ]

  return (
    <section className="page shell">
      <SectionHead
        index="04"
        title="Get in"
        accent="Touch"
        description="Got a project, a collab, or just want to say hi? Slide into my inbox (professionally, of course). Unlike my first code, it doesn't throw errors."
      />

      <div className="contact-grid">
        <Reveal>
          <ul className="contact-list">
            {details.map(({ icon: Icon, label, href }) => {
              const Item = href ? 'a' : 'div'
              return (
                <li key={label}>
                  <Item className="contact-item" {...(href && { href })}>
                    <span className="contact-icon"><Icon aria-hidden="true" /></span>
                    <span>{label}</span>
                  </Item>
                </li>
              )
            })}
          </ul>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" /> Send me an email
          </a>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="contact-subtitle">Find me online</h2>
          <ul className="socials">
            {socials.map(({ label, icon: Icon, url }) => (
              <li key={label}>
                <a className="social" href={url} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
