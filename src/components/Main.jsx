// filepath: /home/tijarim7/projet_open_class/projet_7_react/kasa/src/components/Main.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/index.scss";

function Main() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/P7_Kasa/Datas/logements.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setLocations(data); // Mettez à jour l'état avec les données JSON
    })
    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON:', error);
    });
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