import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/Main.scss";

function Main() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Erreur lors du chargement du fichier JSON:', error));
  }, []);

  return (
    <div className="main__container">
      {locations.map((location, index) => (
        <div key={index} className="main__box">
          {/* Affichage de l'image de couverture */}
          <Link to={`/detail/${location.id}`}>
            <img src={location.cover} alt={location.title} className="main__cover" />
          </Link>
          
          {/* Titre de la location */}
          <div className="main__title">{location.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Main;

