import React from "react";
import PropTypes from "prop-types";
import {useSelector} from 'react-redux';
import FavoriteCard from "../favorite-card/favorite-card";
import {getFavorites} from "../../cities";
import withActiveCard from "../../hocs/withActiveCard/withActiveCard";
import Header from "../header/header";

const Favorites = (props) => {
  const {onHover, onBlur} = props;
  const offers = useSelector((state) => state.favorites);

  const favoritesSorted = getFavorites(offers);

  const offerTemplate = (city, id) => {
    return (
      <li key={city + id} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {(favoritesSorted[city]).map((offer) => (
            <FavoriteCard
              key={offer.id}
              offer={offer}
              onHover={onHover}
              onBlur={onBlur}
            />
          ))}
        </div>
      </li>
    );
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesSorted).map((city, id) => offerTemplate(city, id))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  onHover: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default withActiveCard(Favorites);
