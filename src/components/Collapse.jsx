import { useState, useRef } from "react";
import arrow_up from "../assets/images/arrow_up.png";
import arrow_down from "../assets/images/arrow_down.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className={`collapse ${isOpen ? "open" : ""}`}>
        <p>{title}</p>
        <img
          onClick={handleToggleCollapse} // ✅ Click uniquement ici
          className={`collapse__arrow ${isOpen ? "arrow_down" : "arrow_up"}`}
          src={isOpen ? arrow_down : arrow_up}
          alt={isOpen ? "fermer" : "ouvrir"}
        />
      </div>
      {isOpen && (
        <div ref={contentRef} className={`collapsible-content ${isOpen ? "open" : ""}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>  // Assurez-vous que chaque <li> est directement dans <ul>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}
