const technologies = [
  { nom: "Node.js", type: "Framework", couleur: "#22c55e" },
  { nom: "Docker", type: "DevOps", couleur: "#3b82f6" },
  { nom: "Nginx", type: "DevOps", couleur: "#16a34a" },
  { nom: "GitHub Actions", type: "DevOps", couleur: "#3b82f6" },
  { nom: "Kubernetes", type: "DevOps", couleur: "#4f6bed" },
  { nom: "PostgreSQL", type: "DevOps", couleur: "#336791" },
  { nom: "JavaScript", type: "Langage", couleur: "#facc15" },
  { nom: "Python", type: "Langage", couleur: "#3b82f6" },
  { nom: "TypeScript", type: "Langage", couleur: "#3b82f6" },
  { nom: "React", type: "Framework", couleur: "#22d3ee" },
  { nom: "Django", type: "Framework", couleur: "#14532d" },
  { nom: "Laravel", type: "Framework", couleur: "#ef4444" },
];

export default function TechStack() {
  return (
    <section className="tech-stack-section text-center">
      <div className="container">
        <h2 className="featured-title">Stack technique</h2>
        <p className="featured-subtitle">Les technologies que j'utilise au quotidien</p>
        <div className="tech-stack-list">
          {technologies.map((t) => (
            <div className="tech-stack-item" key={t.nom}>
              <span className="tech-stack-dot" style={{ background: t.couleur }} />
              <span className="tech-stack-name">{t.nom}</span>
              <span className="tech-stack-type">{t.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}