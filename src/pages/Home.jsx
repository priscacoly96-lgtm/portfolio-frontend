import { Link } from "react-router-dom";
import { ArrowRight, Mail, FolderGit2, Code2, Rocket, Wrench } from "lucide-react";

const stack = [
  "Django",
  "Python",
  "Django REST Framework",
  "React",
  "JavaScript",
  "Bootstrap",
  "PostgreSQL",
  "Git / GitHub",
  "Vercel / Render",
];

const stats = [
  { icon: FolderGit2, color: "#a78bfa", value: "2", label: "Projets livrés" },
  { icon: Code2, color: "#38bdf8", value: String(stack.length), label: "Compétences" },
  { icon: Rocket, color: "#34d399", value: "4", label: "Déploiements" },
  { icon: Wrench, color: "#fb923c", value: "3", label: "Outils de déploiement" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-section">
        <div className="container text-center">
          <span className="hero-available">
            <span className="hero-available-dot"></span>
            Disponible pour opportunités
          </span>

          <h1 className="hero-title">
            Développeur <span className="text-violet">Full-Stack</span>
            <br />&amp; <span className="text-cyan">DevOps Engineer</span>
          </h1>

          <p className="hero-subtitle">
            Je conçois des architectures robustes, des interfaces élégantes et
            des pipelines d'intégration continue. Passionnée par l'ingénierie
            logicielle à grande échelle.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link to="/projets" className="btn btn-gradient btn-lg">
              Explorer mes projets <ArrowRight size={18} className="ms-2" />
            </Link>
            <Link to="/contact" className="btn btn-lg btn-ghost">
              <Mail size={18} className="me-2" /> Me contacter
            </Link>
          </div>

          <div className="row justify-content-center g-3 mt-5">
            {stats.map(({ icon: Icon, color, value, label }) => (
              <div className="col-6 col-md-3" key={label}>
                <div className="stat-card">
                  <Icon size={26} color={color} className="stat-icon" />
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <h2 className="section-title">Qui suis-je ?</h2>
            <p className="text-muted">
              Passionnée par le développement web, je conçois des applications
              complètes en combinant un backend Django robuste et des
              interfaces React modernes. J'aime aussi explorer les enjeux du
              déploiement (Vercel, Render, Cloudinary) pour livrer des projets
              fonctionnels de bout en bout.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="section-title">Stack technique</h2>
            <div className="d-flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projet phare */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="section-title mb-1">Projet à la une</h2>
            <p className="text-muted mb-0">
              Une de mes réalisations les plus marquantes
            </p>
          </div>
          <Link to="/projets" className="link-violet">
            Voir tout →
          </Link>
        </div>
        <div className="card featured-card">
          <div className="card-body p-4">
            <span className="tag-violet">Full-Stack</span>
            <h3 className="fw-bold mt-2">RED Product</h3>
            <p className="text-muted mb-0">
              Dashboard d'administration d'hôtels, du design Figma au
              déploiement en production.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="cta-section text-center">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2.5rem" }}>
            Travaillons ensemble
          </h2>
          <p className="text-muted mb-4">
            Une opportunité, un projet, une question ? Écrivez-moi.
          </p>
          <Link to="/contact" className="btn btn-gradient btn-lg">
            Envoyer un message <ArrowRight size={18} className="ms-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;