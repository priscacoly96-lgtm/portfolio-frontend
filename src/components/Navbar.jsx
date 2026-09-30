import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-prodev">
      <div className="container">
       <NavLink className="navbar-brand d-flex align-items-center gap-3" to="/" onClick={close}>
  <span className="brand-logo">P</span>
  <span className="brand-name">ProDev</span>
</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-lg-1">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={close}>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projets" onClick={close}>Projets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/parcours" onClick={close}>Parcours</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={close}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;