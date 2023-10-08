import React from "react";

const HowItWorks = ({ step, title, info }) => {
  return (
    <>
      <div className="how-it-works__card">
        {/* <div className="circle"></div> */}
        <h2 className="how-it-works__card__heading">{step}</h2>
        <div className="how-it-works__card__description">
          <h3 className="how-it-works__card__step">{title}</h3>
          <p className="how-it-works__card__info">{info}</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
