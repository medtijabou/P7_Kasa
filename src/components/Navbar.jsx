import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/src/assets/images/logoKasa.png" alt="Kasa" />
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
