import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import placeCardProp from "./place-card.prop";

const premiumMarkTemplate = <div className="place-card__mark"><span>Premium</span></div>;

const PlaceCard = (props) => {
  const {offer, onHover} = props;
  const {previewImage, price, rating, title, type, isPremium, isFavorite, id} = offer;

  const premiumMark = isPremium ? premiumMarkTemplate : ``;
  const isBookmarkedClass = isFavorite ? ` place-card__bookmark-button--active` : ``;
  const isBookmarkedText = isFavorite ? `In bookmarks` : `To bookmarks`;
  const ratingWidth = (rating * 100 / 5) + `%`;

  return (
    <article
      id={id}
      className="cities__card place-card"
      onMouseEnter={onHover}
    >
      {premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button` + isBookmarkedClass + ` button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isBookmarkedText}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape(placeCardProp).isRequired,
};

export default PlaceCard;
