import React from "react";
import PlaceCard from "../place-card/place-card";

const imageStyle = {
  width: 150,
  height: 110
};

const FavoriteCard = (props) => {

  return (
    <PlaceCard
      classPrefix={`favorites`}
      imgStyle={imageStyle}
      {...props}
    />
  );
};

export default FavoriteCard;
