import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Collapse from "./Collapse"; // Vérifie que le composant est bien importé
import "../style/page/About.scss";

function About() {
  const [collapsesData, setCollapsesData] = useState([]);

  useEffect(() => {
    // Charger le fichier JSON depuis le dossier public
    fetch('./Datas/collapses.json')
      .then((response) => response.json())
      .then((data) => setCollapsesData(data))
      .catch((error) => console.error('Erreur lors du chargement du fichier JSON:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="about">
        {/* Contenu de la page */}
      </div>
      <div className="collapse__container">
        {collapsesData.map((collapse) => (
          <Collapse key={collapse.id} title={collapse.title} content={collapse.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;
