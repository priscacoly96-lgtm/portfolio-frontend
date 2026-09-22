import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          minHeight: "70vh",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Développeur Full-Stack & DevOps Engineer
          </h1>
          <p className="lead mb-4">
            Je conçois et développe des applications web modernes, du backend
            à l'infrastructure de déploiement.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/projets" className="btn btn-primary btn-lg">
              Voir mes projets
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Qui suis-je ?</h2>
            <p className="text-muted">
              Passionnée par le développement web, je conçois des
              applications complètes en combinant un backend Django robuste
              et des interfaces React modernes. J'aime aussi explorer les
              enjeux du déploiement (Vercel, Render, Cloudinary) pour livrer
              des projets fonctionnels de bout en bout.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Ma stack technique</h2>
            <div className="d-flex flex-wrap gap-2">
              {[
                "Django",
                "Django REST Framework",
                "React",
                "JavaScript",
                "Bootstrap",
                "PostgreSQL",
                "Git / GitHub",
                "Vercel / Render",
              ].map((tech) => (
                <span
                  key={tech}
                  className="badge bg-dark text-white px-3 py-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu projet */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Projet phare</h2>
          <p className="text-muted mb-4">
            RED Product — dashboard d'administration d'hôtels, du design
            Figma au déploiement en production.
          </p>
          <Link to="/projets" className="btn btn-dark">
            Découvrir tous mes projets
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;