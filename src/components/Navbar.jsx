import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/" onClick={close}>
          ProDev
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
          <ul className="navbar-nav ms-auto">
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