import Navbar from "../Navbar";
import Footer from "../Footer";
import Collapse from "./Collapse"; // Vérifie que le composant est bien importé
import collapsesData from "../../components/Datas/collapses.json";

import "../pages/About.scss";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
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
