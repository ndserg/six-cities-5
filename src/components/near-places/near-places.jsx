import React from "react";
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import NearCard from "../near-card/near-card";
import withActiveCard from "../../hocs/withActiveCard/withActiveCard";

const NearPlaces = (props) => {
  const {offers, onHover, onBlur} = props;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((room) => (
          <NearCard
            key={room.id}
            offer={room}
            onHover={onHover}
            onBlur={onBlur}
          />
        ))}
      </div>
    </section>
  );
};

NearPlaces.propTypes = {
  onHover: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default withActiveCard(NearPlaces);
