import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, ExternalLink, Layers } from "lucide-react";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

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
            <GithubIcon size={18} className="me-2" /> Code source
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