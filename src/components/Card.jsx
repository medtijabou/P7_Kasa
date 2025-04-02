import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ location, className = '' }) {  // Définir className avec une valeur par défaut ici
  return (
    <div className={`main__box ${className}`}> 
      <Link to={`/detail/${location.id}`}>
        <img
          src={location.cover}
          alt={location.title}
          className="main__cover"
        />
      </Link>

      <div className="main__title">{location.title}</div>
    </div>
  );
}

Card.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
