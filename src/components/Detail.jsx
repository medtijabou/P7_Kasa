// filepath: /home/tijarim7/projet_open_class/projet_7_react/kasa/src/components/Detail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/Datas/logements.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Fichier JSON non trouvé ou erreur de réseau');
        }
        return response.json();
      })
      .then((data) => {
        const foundLocation = data.find((location) => location.id === id);
        if (!foundLocation) {
          throw new Error('Logement non trouvé');
        }
        setLocation(foundLocation);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setError(error.message); // Affichez un message d'erreur à l'utilisateur
      });
  }, [id]);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

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
          <img key={pic} src={pic} alt={`Photo ${idx + 1}`} className="detail__image" />
        ))}
      </div>
      
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