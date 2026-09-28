import { useState, useEffect } from 'react'
import axios from 'axios'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects/`)
      .then((response) => {
        setProjects(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Impossible de charger les projets.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="container py-5">
        <p className="text-muted">Chargement...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-5">
        <p className="text-danger">{error}</p>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="section-title mb-1" style={{ fontSize: '2.5rem' }}>
          Mes projets
        </h1>
        <p className="text-muted mb-0">Une sélection de mes réalisations</p>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card project-card h-100">
              {project.image ? (
                <img
                  src={project.image}
                  className="project-img"
                  alt={project.title}
                />
              ) : (
                <div className="project-img project-img-empty" />
              )}

              <div className="card-body p-4">
                {project.category && (
                  <span className="tag-violet">{project.category}</span>
                )}
                <h5 className="fw-bold mt-1 mb-2">{project.title}</h5>
                <p className="text-muted">{project.description}</p>

                {project.technologies && (
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.split(',').map((tech) => (
                      <span key={tech} className="tech-pill tech-pill-sm">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>

                                       <div className="card-footer project-footer">
                {project.project_url && (
                  <a href={project.project_url} className="btn btn-gradient btn-sm me-2" target="_blank" rel="noreferrer">
                    Voir le site
                  </a>
                )}
                {project.github_url && (
                  <a href={project.github_url} className="btn btn-outline-light btn-sm btn-ghost" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects