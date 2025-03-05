import { useState } from "react";

import "./Collapse.scss"; // Vérifie que ce fichier est bien importé

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title" >
        <h2>{title}</h2>
        <span className={`collapse__icon ${isOpen ? "open" : ""}`}>
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}onClick={display}></i>
        </span>
      </div>
      <div className={`collapse__dropdown__content ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
