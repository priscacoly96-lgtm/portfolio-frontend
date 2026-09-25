import { useState, useEffect } from 'react'
import axios from 'axios'

const CATEGORIES = ['Langage', 'Framework', 'DevOps']

function Journey() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
     .get(`${import.meta.env.VITE_API_URL}/api/skills/`)
      .then((response) => {
        setSkills(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Impossible de charger les compétences.')
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
      <h1 className="mb-4">Mon parcours</h1>
      <h2 className="h4 mb-4">Compétences techniques</h2>
      <div className="row g-4">
        {CATEGORIES.map((category) => (
          <div className="col-md-4" key={category}>
            <div className="card h-100 shadow-sm">
              <div className="card-header fw-bold">{category}</div>
              <ul className="list-group list-group-flush">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={skill.id}>{skill.name}{skill.level && <span className="badge bg-secondary">{skill.level}</span>}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journey