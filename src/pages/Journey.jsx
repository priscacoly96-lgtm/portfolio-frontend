import {
  Briefcase,
  GraduationCap,
  Calendar,
  Award,
  CheckCircle2,
} from 'lucide-react'
import { experiences, certifications } from '../data/parcours'

const CERT_COLORS = [
  '#fb923c', // orange
  '#38bdf8', // bleu clair
  '#60a5fa', // bleu
  '#a78bfa', // violet
  '#34d399', // vert
  '#fb7185', // rouge
]
function Journey() {
  return (
    <div className="container jr-page">
      <h1 className="projects-title">Parcours &amp; Certifications</h1>
      <p className="projects-subtitle">
        Mon parcours académique, professionnel et mes certifications
      </p>

      <h2 className="jr-heading">
        <Briefcase size={26} /> Expérience &amp; Formation
      </h2>

      <div className="jr-timeline">
        {experiences.map((item) => (
          <div className="jr-item" key={item.title}>
            <span className={`jr-dot ${item.type}`}>
              {item.type === 'school' ? (
                <GraduationCap size={16} />
              ) : (
                <Briefcase size={16} />
              )}
            </span>
            <div className="jr-card">
              <div className="jr-card-top">
                <h3>{item.title}</h3>
                <span className="jr-period">
                  <Calendar size={16} /> {item.period}
                </span>
              </div>
              <p className="jr-place">{item.place}</p>
              <p className="jr-desc">{item.description}</p>
              <div className="jr-tags">
                {item.tags.map((t) => (
                  <span key={t} className="jr-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="jr-heading jr-heading-cert">
        <Award size={26} /> Certifications
      </h2>

                <div className="jr-certs">
        {certifications.map((c, i) => (
          <div className="jr-cert" key={c.title}>
            <span
              className="jr-cert-icon"
              style={{ color: CERT_COLORS[i % CERT_COLORS.length] }}
            >
              <CheckCircle2 size={26} />
            </span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
              <span className="jr-cert-year">{c.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journey