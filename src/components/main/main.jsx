import React from "react";
import {useSelector} from 'react-redux';
import PropTypes from "prop-types";
import Header from "../header/header";
import Cities from "../cities/cities";
import PlaceCards from "../place-cards/place-cards";
import placeCardProp from "../place-card/place-card.prop";
import MainEmpty from "../main-empty/main-empty";
import Map from "../map/map";
import {getUniqueCities} from "../../cities";
import {getFilterdOffers} from "../../cities";

const Main = (props) => {
  const {offers} = props;
  const cities = getUniqueCities(offers);
  const isEmptyOffers = !(offers && offers.length > 0) ? true : false;
  const emptyClass = isEmptyOffers ? `cities__places-container--empty` : ``;
  const mainEmtyClass = isEmptyOffers ? `page__main--index-empty` : ``;
  const selectedCity = useSelector((state) => state.city);
  const offersByCity = getFilterdOffers(offers, selectedCity);

  function EmptyPlaces() {
    return !isEmptyOffers ? <PlaceCards offers={offersByCity} /> : <MainEmpty />;
  }

  function EmptyMap() {
    if (!isEmptyOffers) {
      return (<section className="cities__map map">
        <Map
          offers={offersByCity}
          cities={cities}
          city={selectedCity} />
      </section>
      );
    }

    return null;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${mainEmtyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Cities
              cities={cities}
              city={selectedCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container ${emptyClass} container`}>
            <EmptyPlaces />
            <div className="cities__right-section">
              <EmptyMap />
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
