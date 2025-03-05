import Navbar from "../Navbar";
import "../pages/Error.scss"; 
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Navbar />
      <div className="error__container">
      <h1 className="error__title">404</h1>
      <p className="error__text">Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/"><div className="clear">Retourner sur la page d’accueil</div></Link>
      </div>
    </div>
  );
}

export default Error;
