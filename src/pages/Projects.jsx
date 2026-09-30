import { useState, useEffect, useMemo } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'

const levels = ['Tous', 'Front', 'Back', 'DevOps', 'Full-Stack']

const splitTechs = (p) =>
  p.technologies
    ? p.technologies.split(',').map((t) => t.trim()).filter(Boolean)
    : []

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [category, setCategory] = useState('Tous')
  const [selectedTechs, setSelectedTechs] = useState([])

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

  const allTechs = useMemo(
    () =>
      [...new Set(projects.flatMap(splitTechs))].sort((a, b) =>
        a.localeCompare(b)
      ),
    [projects]
  )

  const toggleTech = (tech) =>
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const matchLevel = category === 'Tous' || p.category === category
      const techs = splitTechs(p)
      const matchTechs = selectedTechs.every((t) => techs.includes(t))
      const haystack = [p.title, p.description, p.technologies, p.category]
        .join(' ')
        .toLowerCase()
      return matchLevel && matchTechs && haystack.includes(q)
    })
  }, [projects, query, category, selectedTechs])

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
      <h1 className="projects-title">Projets &amp; Architecture</h1>
      <p className="projects-subtitle">
        Explorez mes projets par technologie, rôle et niveau d'architecture
      </p>

      <div className="search-row">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher un projet, une technologie…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="filters-btn"
          onClick={() => setShowFilters((v) => !v)}
        >
          <SlidersHorizontal size={20} />
          Filtres
        </button>
      </div>

      {showFilters && (
        <div className="filters-card">
          <h3 className="filters-heading">Niveau d'architecture</h3>
          <div className="filters-group">
            {levels.map((l) => (
              <button
                type="button"
                key={l}
                className={`filter-chip ${category === l ? 'active' : ''}`}
                onClick={() => setCategory(l)}
              >
                {l}
              </button>
            ))}
          </div>

          <h3 className="filters-heading">Technologies</h3>
          <div className="filters-group">
            {allTechs.map((t) => (
              <button
                type="button"
                key={t}
                className={`filter-chip ${
                  selectedTechs.includes(t) ? 'active' : ''
                }`}
                onClick={() => toggleTech(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="results-count">
        {filtered.length} projet{filtered.length > 1 ? 's' : ''} trouvé
        {filtered.length > 1 ? 's' : ''}
      </p>

      <div className="row g-4">
        {filtered.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects