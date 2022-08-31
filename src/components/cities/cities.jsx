import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import City from '../city/city';
import placeCardProp from "../place-card/place-card.prop";
import {setCity} from '../../store/action';
import {getUniqueCities} from "../../cities";

const Cities = ({offers}) => {
  const cities = getUniqueCities(offers);

  const selectedCity = useSelector((state) => state.city);

  const dispatch = useDispatch();

  const cityClickHandler = (city) => {
    dispatch(setCity({currentCity: city}));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, id) =>
        <City
          key={`${city}` + `${id}`}
          className="locations__item"
          onCitySelect={cityClickHandler}
          city={city}
          currentCity={selectedCity}
        />
      )}
    </ul>
  );
};

Cities.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default Cities;
