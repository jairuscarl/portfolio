import { FaChevronRight, FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { profile, socials } from '../data'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

export default function Contact() {
  // Grouped like an iOS Settings list; `color` fills each row's icon square.
  const details = [
    { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#0a84ff' },
    { icon: FaPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, color: '#30d158' },
    { icon: FaLocationDot, label: 'Location', value: profile.location, color: '#ff453a' },
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
          <h2 className="group-title">Contact</h2>
          <ul className="list-group glass">
            {details.map(({ icon: Icon, label, value, href, color }) => {
              const Row = href ? 'a' : 'div'
              return (
                <li key={label}>
                  <Row className="list-row" {...(href && { href })}>
                    <span className="row-icon" style={{ '--c': color }}><Icon aria-hidden="true" /></span>
                    <span className="row-text">
                      <span className="row-label">{label}</span>
                      <span className="row-value">{value}</span>
                    </span>
                    {href && <FaChevronRight className="row-chevron" aria-hidden="true" />}
                  </Row>
                </li>
              )
            })}
          </ul>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <FaEnvelope aria-hidden="true" /> Send me an email
          </a>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="group-title">Find me online</h2>
          <ul className="app-grid glass">
            {socials.map(({ label, icon: Icon, url, color }) => (
              <li key={label}>
                <a className="app-tile" href={url} target="_blank" rel="noreferrer">
                  <span className="app-icon" style={{ '--c': color }}><Icon aria-hidden="true" /></span>
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
