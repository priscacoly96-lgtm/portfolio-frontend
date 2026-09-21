import { useState, useEffect } from 'react'
import axios from 'axios'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/projects/')
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
        <p>Chargement...</p>
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
      <h1 className="mb-4">Mes projets</h1>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card h-100 shadow-sm">
              {project.image && (
                <img src={project.image} className="card-img-top" alt={project.title} />
              )}
              <div className="card-body">
                {project.category && (
                  <span className="badge bg-primary mb-2">{project.category}</span>
                )}
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="text-muted small">{project.technologies}</p>
              </div>
              <div className="card-footer bg-white border-0">
                {project.project_url && (
                  <a href={project.project_url} className="btn btn-primary btn-sm me-2" target="_blank" rel="noreferrer">Voir le site</a>
                )}
                {project.github_url && (
                  <a href={project.github_url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noreferrer">GitHub</a>
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