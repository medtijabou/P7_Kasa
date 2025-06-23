import { useState, useRef } from "react";
import PropTypes from "prop-types";
import arrow_up from "/assets/images/arrow_up.png";
import arrow_down from "/assets/images/arrow_down.png";

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
          onClick={handleToggleCollapse}
          className={`collapse__arrow ${isOpen ? "arrow_up" : "arrow_down"}`}
          src={isOpen ? arrow_up : arrow_down}
          alt={isOpen ? "fermer" : "ouvrir"}
        />
      </div>
      {isOpen && (
        <div ref={contentRef} className={`collapsible-content ${isOpen ? "open" : ""}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};
