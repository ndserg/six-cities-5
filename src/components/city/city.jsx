import React from "react";
import PropTypes from "prop-types";

const activeClass = ` tabs__item--active`;

const City = (props) => {
  const {city, currentCity, onCitySelect} = props;

  const isSelected = (city === currentCity) ? activeClass : ``;

  return (
    <li className="locations__item"
      onClick={() => {
        onCitySelect(city);
      }
      }
    >
      <a className={`locations__item-link tabs__item` + isSelected} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func.isRequired,
};

export default City;
