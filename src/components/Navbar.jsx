import { NavLink } from "react-router-dom";
import logoKasa from "../assets/images/logoKasa.png"; // Importez l'image

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoKasa} alt="Kasa" /> {/* Utilisez la variable importée */}
      <div className="navbar__link">
        {/* Lien pour Accueil avec effet actif */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div>Accueil</div>
        </NavLink>

        {/* Lien pour À propos avec effet actif */}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div>À propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
