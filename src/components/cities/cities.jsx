import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import City from '../city/city';
import placeCardProp from "../place-card/place-card.prop";
import {setCity} from '../../store/action';
import {getUniqueCities} from "../../cities";

const Cities = ({offers}) => {
  const cities = getUniqueCities(offers);
  const sortedCities = Object.keys(cities).sort();
  const selectedCity = useSelector((state) => state.city);

  const dispatch = useDispatch();

  const cityClickHandler = (city) => {
    dispatch(setCity({currentCity: {name: cities[city].name, loacation: [cities[city].location.latitude, cities[city].location.longitude]}}));
  };

  return (
    <ul className="locations__list tabs__list">
      {sortedCities.map((city, id) =>
        <City
          key={`${city}` + `${id}`}
          className="locations__item"
          onCitySelect={cityClickHandler}
          city={city}
          currentCity={selectedCity.name}
        />
      )}
    </ul>
  );
};

Cities.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default Cities;
