import React from "react";
import {useSelector} from 'react-redux';
import PropTypes from "prop-types";
import Sorting from "../sort-types/sort-types";
import {sortTypes} from "../../const";
import PlaceCards from "../place-cards/place-cards";
import placeCardProp from "../place-card/place-card.prop";
import Map from "../map/map";
import Cities from "../cities/cities";
import {getUniqueCities, getFilterdOffers, getSortedOffers} from "../../cities";

const Main = (props) => {
  const {offers} = props;

  const cities = getUniqueCities(offers);
  const selectedCity = useSelector((state) => state.city);
  const selectedSortType = useSelector((state) => state.currentSortType);
  const currentOffers = getFilterdOffers(selectedCity, offers);
  const sortedOffers = getSortedOffers(currentOffers, selectedSortType);
  const placesFound = currentOffers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesFound} places to stay in Amsterdam</b>
              <Sorting
                sortTypes={sortTypes}
                selectedSortType={selectedSortType}
              />
              <PlaceCards offers={sortedOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={currentOffers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
};

export default Main;
