
import "../style/index.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
   
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__text">
          Oups! La page que <span>vous demandez n'existe pas.</span>
        </p>
        <Link to="/">
          <div className="clear">Retourner sur la page d’accueil</div>
        </Link>
      </div>
   
    </div>
  );
}

export default Error;
