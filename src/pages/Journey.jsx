import { useState, useEffect } from 'react'
import axios from 'axios'

const CATEGORIES = [
  { name: 'Langage', color: '#22b8f0' },
  { name: 'Framework', color: '#8b5cf6' },
  { name: 'DevOps', color: '#34d399' },
]

function levelClass(level) {
  const l = (level || '').toLowerCase()
  if (l.startsWith('avanc')) return 'level-pill level-advanced'
  if (l.startsWith('interm')) return 'level-pill level-intermediate'
  return 'level-pill'
}

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
          Mon parcours
        </h1>
        <p className="text-muted mb-0">Compétences techniques</p>
      </div>

      <div className="row g-4">
        {CATEGORIES.map((category) => (
          <div className="col-md-4" key={category.name}>
            <div className="card skill-card h-100">
              <div className="skill-card-header">
                <span
                  className="skill-dot"
                  style={{ background: category.color }}
                ></span>
                {category.name}
              </div>
              <ul className="list-unstyled m-0">
                {skills
                  .filter((skill) => skill.category === category.name)
                  .map((skill) => (
                    <li className="skill-row" key={skill.id}>
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className={levelClass(skill.level)}>
                          {skill.level}
                        </span>
                      )}
                    </li>
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