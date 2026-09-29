import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Code2, ExternalLink, Layers } from "lucide-react";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects/${id}/`)
      .then((res) => setProject(res.data))
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Projet introuvable.</p>
        <Link to="/projets" className="link-violet">
          <ArrowLeft size={16} /> Retour aux projets
        </Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Chargement...</p>
      </div>
    );
  }

  const techs = Array.isArray(project.technologies)
    ? project.technologies
    : (project.technologies || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

  const date = new Date(project.created_at).toLocaleDateString("fr-FR");

  return (
    <div className="container detail-page">
      <Link to="/projets" className="detail-back">
        <ArrowLeft size={18} /> Retour aux projets
      </Link>

      <div className="detail-image">
        {project.image && <img src={project.image} alt={project.title} />}
      </div>

      <div className="detail-tags">
        {project.category && (
          <span className="detail-tag">{project.category}</span>
        )}
        <span className="detail-tag detail-tag-blue">★ Projet à la une</span>
      </div>

      <h1 className="detail-title">{project.title}</h1>
      <p className="detail-desc">{project.description}</p>

      <div className="detail-meta">
        <span>
          <Calendar size={18} /> {date}
        </span>
      </div>

      <div className="d-flex flex-wrap gap-3 mb-5">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <Code2 size={18} className="me-2" /> Code source
          </a>
        )}
        {project.project_url && (
          <a
            href={project.project_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gradient"
          >
            <ExternalLink size={18} className="me-2" /> Live Demo
          </a>
        )}
      </div>

      {techs.length > 0 && (
        <div className="mb-5">
          <h3 className="detail-stack-title">
            <Layers size={20} /> STACK TECHNIQUE
          </h3>
          <div className="d-flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span key={tech} className="detail-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.details && (
        <div className="detail-content">
          <ReactMarkdown>{project.details}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;