import { motion } from 'motion/react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../data'
import { useTilt } from '../hooks'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

function ProjectCard({ project }) {
  const tilt = useTilt(5)
  return (
    <motion.article className="card glass" {...tilt}>
      <div className="card-media">
        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.url ? (
          <a className="btn btn-primary btn-block" href={project.url} target="_blank" rel="noreferrer">
            {project.linkLabel || 'View project'} <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        ) : (
          <span className="btn liquid btn-block is-disabled" aria-disabled="true">Link coming soon</span>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section className="page shell">
      <SectionHead
        index="02"
        title="Featured"
        accent="Projects"
        description="Things I've built, from Roblox games to full-stack web apps. All of them compile (eventually)."
      />

      <ul className="cards-grid">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={(i % 2) * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
