import { useEffect, useState } from "react";

import Collapse from "../components/Collapse";
function About() {
  const [collapsesData, setCollapsesData] = useState([]);

  useEffect(() => {
    // Charger le fichier JSON depuis le dossier public
    fetch("./Datas/collapses.json")
      .then((response) => response.json())
      .then((data) => setCollapsesData(data))
      .catch((error) =>
        console.error("Erreur lors du chargement du fichier JSON:", error)
      );
  }, []);

  return (
    <main>

      <div className="about">{/* Contenu de la page */}</div>
      <div className="collapse__container">
        {collapsesData.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </div>

    </main>
  );
}

export default About;
