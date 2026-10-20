import { Link } from 'react-router'
import { highlights, profile } from '../data'

export default function Home() {
  return (
    <section className="hero shell">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="kicker">{profile.role}</div>
          <h1 className="hero-name">
            {profile.firstName}
            <br />
            <span className="accent">{profile.lastName}</span>
          </h1>
          <p className="hero-role">{profile.tagline}</p>
          <p className="hero-desc">{profile.intro}</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" to="/projects">View my projects</Link>
            <Link className="btn" to="/about">About me</Link>
          </div>
          <dl className="hero-stats">
            {highlights.map(({ value, label }) => (
              <div className="hero-stat" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <img className="hero-portrait" src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  )
}
