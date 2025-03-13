import { NavLink } from "react-router-dom";
import logoKasa from "../assets/images/logoKasa.png"; // Importez l'image

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={logoKasa} alt="Kasa" />
        <ul className="navbar__link">
          <li>
            {/* Lien pour Accueil avec effet actif */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            {/* Lien pour À propos avec effet actif */}
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
