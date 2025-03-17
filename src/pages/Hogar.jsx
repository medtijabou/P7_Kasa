import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Ajout de useNavigate pour la redirection
import { FaStar } from "react-icons/fa";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Slideshow from "../components/Slideshow";

function Hogar() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
  const navigate = useNavigate(); // Initialisation du hook useNavigate

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  useEffect(() => {
    fetch("/Datas/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLocation = data.find((item) => item.id === id);
        if (!selectedLocation) {
          // Si aucun logement trouvé, rediriger vers la page d'erreur
          navigate("/error");
        } else {
          setLocation(selectedLocation);
        }
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du fichier JSON:", error);
        navigate("/error");  // Redirection vers la page d'erreur en cas d'erreur de fetch
      });
  }, [id, navigate]);

  if (!location) {
    return <p>Chargement...</p>;
  }

  return (
    <main>
      <section className="hogar__container">
        <Slideshow imagesList={location.pictures} />

        <article className="hogar__container__header">
          <h1 className="hogar__title">{location.title}</h1>
          <div className="hogar__card">
            <div className="hogar__header">
              <div className="hogar__rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < location.rating ? "star filled" : "star"}
                  />
                ))}
              </div>

              <div className="hogar__host">
                <p className="hogar__host-name">{location.host.name}</p>
                <img
                  src={location.host.picture}
                  alt={location.host.name}
                  className="hogar__host-image"
                />
              </div>
            </div>

            <div className="hogar__filtre">
              <p className="hogar__location">{location.location}</p>
              <div className="hogar__tags">
                {location.tags && location.tags.length > 0 && (
                  <div className="tags__list">
                    {location.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
        <article className="text__dropdown__container">
          <div className="text__box">
            <div className="text__dropdown__title">
              <h2>Description</h2>
              <span className={`text__icon ${isDescriptionOpen ? "open" : ""}`}>
                <i
                  className={`fa-solid ${
                    isDescriptionOpen ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  onClick={toggleDescription}
                  aria-expanded={isDescriptionOpen ? "true" : "false"}
                ></i>
              </span>
            </div>
            <div
              className={`text__dropdown__content ${
                isDescriptionOpen ? "open" : ""
              }`}
            >
              <p>{location.description}</p>
            </div>
          </div>

          <div className="text__box">
            <div className="text__dropdown__picto">
              <h2>Equipments</h2>
              <span className={`text__icon ${isEquipmentsOpen ? "open" : ""}`}>
                <i
                  className={`fa-solid ${
                    isEquipmentsOpen ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  onClick={toggleEquipments}
                  aria-expanded={isEquipmentsOpen ? "true" : "false"}
                ></i>
              </span>
            </div>
            <div
              className={`text__dropdown__content ${
                isEquipmentsOpen ? "open" : ""
              }`}
            >
              <ul>
                {location.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Hogar;
