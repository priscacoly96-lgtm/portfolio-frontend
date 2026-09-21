import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">ProDev</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Accueil</NavLink>
          <NavLink className="nav-link" to="/projets">Projets</NavLink>
          <NavLink className="nav-link" to="/parcours">Parcours</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar