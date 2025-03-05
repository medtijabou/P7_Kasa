

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
  
  <img src="/src/assets/images/logoKasa.png" alt="Kasa" />
    <div className="navbar__link">
        <Link to="/"><div>Accueil</div></Link>
   
   
        <Link to="/about"><div >À propo</div></Link>
        </div>

    </nav>
  );
}

export default Navbar;
