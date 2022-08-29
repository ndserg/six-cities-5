import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import City from '../city/city';
import {setCity} from '../../store/action';

const Cities = (props) => {
  const {cities} = props;

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
  cities: PropTypes.array.isRequired,
};

export default Cities;
