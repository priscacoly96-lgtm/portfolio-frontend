import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Eye,
  Heart,
  ExternalLink,
  Star,
  Image as ImageIcon,
} from 'lucide-react'

const CATEGORY_CLASS = {
  'Full-Stack': 'cat-fullstack',
  Front: 'cat-front',
  Back: 'cat-back',
  DevOps: 'cat-devops',
}

function GithubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function ProjectCard({ project }) {
  const techs = project.technologies
    ? project.technologies.split(',').map((t) => t.trim()).filter(Boolean)
    : []
  const visibleTechs = techs.slice(0, 4)
  const extra = techs.length - visibleTechs.length

  return (
    <article className="pc">
      <div className="pc-cover">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="pc-cover-empty">
            <ImageIcon size={56} strokeWidth={1.5} />
          </div>
        )}
        <div className="pc-cover-fade" />

        <div className="pc-badges">
          {project.category && (
            <span
              className={`pc-cat ${
                CATEGORY_CLASS[project.category] || 'cat-fullstack'
              }`}
            >
              {project.category}
            </span>
          )}
          {project.featured && (
            <span className="pc-featured">
              <Star size={14} fill="currentColor" /> Featured
            </span>
          )}
        </div>
      </div>

      <div className="pc-body">
        <div className="pc-title-row">
          <h3 className="pc-title">
            <Link to={`/projets/${project.id}`} className="stretched-link">
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight size={22} className="pc-arrow" />
        </div>

        <p className="pc-desc">{project.description}</p>

        {techs.length > 0 && (
          <div className="pc-tags">
            {visibleTechs.map((tech) => (
              <span key={tech} className="pc-tag">
                {tech}
              </span>
            ))}
            {extra > 0 && <span className="pc-tag">+{extra}</span>}
          </div>
        )}

        <div className="pc-footer">
          <div className="pc-stats">
            <span>
              <Eye size={18} /> {project.views ?? 0}
            </span>
            <span>
              <Heart size={18} /> {project.likes ?? 0}
            </span>
          </div>
          <div className="pc-links">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                aria-label="Code source"
              >
                <GithubIcon />
              </a>
            )}
            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noreferrer"
                aria-label="Voir le site"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard