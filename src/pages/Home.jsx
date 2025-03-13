import { useEffect, useState } from "react";
import "../style/index.scss";
import Banner from "../components/Banner";
import Card from "../components/Card"; // Assure-toi d'importer le composant Card

function Main() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/Datas/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLocations(data); // Mettez à jour l'état avec les données JSON
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du fichier JSON:", error);
      });
  }, []);

  return (
    <main>
      <Banner />
      <div className="main__container">
        {locations.map((location) => (
          // Utilisation du composant Card avec la classe main__box
          <Card key={location.id} location={location} className="main__box" />
        ))}
      </div>
    </main>
  );
}

export default Main;
