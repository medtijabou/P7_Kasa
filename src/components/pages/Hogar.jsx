import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick"; // Import du carrousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

import "../pages/Hogar.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import des icônes des flèches
import Navbar from "../Navbar";
import Footer from "../Footer";

function Hogar() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);  // État pour la description
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);    // État pour les équipements

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };

  useEffect(() => {
    fetch("/data/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedLocation = data.find((item) => item.id === id);
        setLocation(selectedLocation);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement du fichier JSON:", error)
      );
  }, [id]);

  if (!location) {
    return <p>Chargement...</p>;
  }

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="hogar__container">
      <Navbar />
      <Slider {...settings} className="hogar__carousel">
        {location.pictures.map((pic, index) => (
          <div key={index}>
            <img
              src={pic}
              alt={`Photo ${index + 1}`}
              className="hogar__image"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
<div className="hogar__container__header">
      <h1 className="hogar__title">{location.title}</h1>
      <div className="hogar__header">
  {/* Section des étoiles */}
  <div className="hogar__rating">
    {[...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < location.rating ? "star filled" : "star"}
      />
    ))}
  </div>

  {/* Section de l'hôte */}
  <div className="hogar__host">
    <p className="hogar__host-name">{location.host.name}</p>
    <img src={location.host.picture} alt={location.host.name} className="hogar__host-image" />
  </div>
</div>
</div>

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

      <div className="text__dropdown__container">
        {/* Section Description */}
        <div className="text__box">
          <div className="text__dropdown__title">
            <h2>Description</h2>
            <span className={`text__icon ${isDescriptionOpen ? "open" : ""}`}>
              <i
                className={`fa-solid ${isDescriptionOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
                onClick={toggleDescription}
                aria-expanded={isDescriptionOpen ? "true" : "false"}
              ></i>
            </span>
          </div>
          <div className={`text__dropdown__content ${isDescriptionOpen ? "open" : ""}`}>
            <p>{location.description}</p>
          </div>
        </div>

        {/* Section Equipments */}
        <div className="text__box">
          <div className="text__dropdown__picto">
            <h2>Equipments</h2>
            <span className={`text__icon ${isEquipmentsOpen ? "open" : ""}`}>
              <i
                className={`fa-solid ${isEquipmentsOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
                onClick={toggleEquipments}
                aria-expanded={isEquipmentsOpen ? "true" : "false"}
              ></i>
            </span>
          </div>
          <div className={`text__dropdown__content ${isEquipmentsOpen ? "open" : ""}`}>
            <ul>
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Hogar;
  