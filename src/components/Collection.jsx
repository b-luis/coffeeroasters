import React from "react";

const Collection = ({ src, name, description }) => {
  return (
    <div className="collection__item">
      <img
        className="collection__item__image"
        src={src}
        alt={`${name} image`}
      />
      <div className="collection__item__info">
        <h3 className="collection__item__heading">{name}</h3>
        <p className="collection__item__description">{description}</p>
      </div>
    </div>
  );
};

export default Collection;
