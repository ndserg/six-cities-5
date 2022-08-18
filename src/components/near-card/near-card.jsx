import React from "react";
import PlaceCard from "../place-card/place-card";

const imageStyle = {
  width: 260,
  height: 200
};

const NearCard = (props) => {

  return (
    <PlaceCard
      classPrefix={`near-places`}
      imgStyle={imageStyle}
      {...props}
    />
  );
};

export default NearCard;
