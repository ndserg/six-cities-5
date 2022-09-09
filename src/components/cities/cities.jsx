import React from "react";
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux';
import City from '../city/city';
import {setCity} from '../../store/action';

const Cities = ({cities, city}) => {

  const sortedCities = Object.keys(cities).sort();

  const dispatch = useDispatch();

  const cityClickHandler = (selectedCity) => {
    dispatch(setCity({currentCity: cities[selectedCity].name}));
  };

  return (
    <ul className="locations__list tabs__list">
      {sortedCities.map((place, id) =>
        <City
          key={`${city}` + `${id}`}
          className="locations__item"
          onCitySelect={cityClickHandler}
          city={place}
          currentCity={city}
        />
      )}
    </ul>
  );
};

Cities.propTypes = {
  city: PropTypes.string.isRequired,
  cities: PropTypes.object.isRequired,
};

export default Cities;
