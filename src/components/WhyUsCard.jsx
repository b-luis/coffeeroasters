import React from "react";

const WhyUsCard = ({ feature, description, src }) => {
  return (
    <div className="why-us__card">
      <div className="why-us__card__image__wrapper">
        <img className="why-us__card__image" src={src} alt="" />
      </div>
      <div className="why-us__card__details">
        <h3 className="why-us__card__heading">{feature}</h3>
        <p className="why-us__card__tagline">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
