// filepath: /home/tijarim7/projet_open_class/projet_7_react/kasa/src/components/Navbar.jsx
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
          className={({ isActive }) => (isActive ? "active" : "")} // Applique la classe "active" quand le lien est actif
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