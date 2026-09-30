import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">P</span>
            <div>
              <div className="footer-name">ProDev Portfolio</div>
              <div className="footer-location">
                <MapPin size={14} /> Paris, France
              </div>
            </div>
          </div>

          <div className="footer-icons">
            <a href="https://github.com/priscacoly96-lgtm" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:ton.email@exemple.com" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 ProDev Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}