import React from "react";
import {useSelector} from 'react-redux';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import Sorting from "../sort-types/sort-types";
import {sortTypes} from "../../const";
import withActiveCard from "../../hocs/withActiveCard/withActiveCard";
import placeCardProp from "../place-card/place-card.prop";
import {getFilterdOffers, getSortedOffers} from "../../cities";

const PlaceCards = (props) => {
  const {offers, onHover, onBlur} = props;
  const selectedCity = useSelector((state) => state.city);
  const currentOffers = getFilterdOffers(selectedCity, offers);
  const selectedSortType = useSelector((state) => state.currentSortType);
  const placesFound = offers.length;
  const sortedOffers = getSortedOffers(currentOffers, selectedSortType);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesFound} places to stay in Amsterdam</b>
      <Sorting
        sortTypes={sortTypes}
        selectedSortType={selectedSortType}
      />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onHover={onHover}
            onBlur={onBlur}
          />
        ))}
      </div>
    </section>
  );
};

PlaceCards.propTypes = {
  onHover: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default withActiveCard(PlaceCards);
