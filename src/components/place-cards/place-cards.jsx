import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import withActiveCard from "../../hocs/withActiveCard/withActiveCard";
import placeCardProp from "../place-card/place-card.prop";

const PlaceCards = (props) => {

  const {offers, onHover, onBlur} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onHover={onHover}
          onBlur={onBlur}
        />
      ))}
    </div>
  );
};

PlaceCards.propTypes = {
  onHover: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default withActiveCard(PlaceCards);
