import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Collapse from "../components/Collapse";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Slideshow from "../components/Slideshow";



function Hogar() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/Datas/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLocation = data.find((item) => item.id === id);
        if (!selectedLocation) {
          navigate("/error");
          return;
        }
        setLocation(selectedLocation);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement du fichier JSON:", error);
        navigate("/error");
      });
  }, [id, navigate]);

  if (!location) {
    return <div className="loading">Chargement...</div>;
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
                {location.tags?.length > 0 && (
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
      </section>

      <section className="hogar__details">
        <Collapse title="Description" content={location.description} />
        <Collapse
          title="Équipements"
          content={location.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </section>
    </main>
  );
}

export default Hogar;
