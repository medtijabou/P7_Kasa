import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../components/Detail.scss";

function Detail() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => {
        const foundLocation = data.find((location) => location.id === id);
        setLocation(foundLocation);
      })
      .catch((error) => console.error('Erreur lors du chargement du fichier JSON:', error));
  }, [id]);

  if (!location) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="detail__container">
      <h1>{location.title}</h1>
      <img src={location.cover} alt={location.title} className="detail__cover" />
      
      <div className="detail__description">{location.description}</div>
      <div className="detail__pictures">
        {location.pictures.map((pic, idx) => (
          <img key={idx} src={pic} alt={`Photo ${idx + 1}`} className="detail__image" />
        ))}
      </div>
      
      {/* Autres informations */}
      <div className="detail__info">
        <p>Host: {location.host.name}</p>
        <p>Location: {location.location}</p>
        <p>Rating: {location.rating}</p>
        <p>Equipments: {location.equipments.join(", ")}</p>
      </div>
    </div>
  );
}

export default Detail;
