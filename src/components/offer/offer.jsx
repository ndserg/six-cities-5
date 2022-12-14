import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {fetchNearPlacesAction} from '../../store/api-actions';
import PropTypes from "prop-types";
import Header from "../header/header";
import CommentForm from "../comment-form/comment-form";
import Reviews from "../reviews/reviews";
import NearPlaces from "../near-places/near-places";
import Map from "../map/map";
import withFavoriteFlag from "../../hocs/withFavoriteFlag/withFavoriteFlag";
import placeCardProp from "../place-card/place-card.prop";
import {AuthorizationStatus} from '../../const';

const premiumMarkTemplate = <div className="property__mark"><span>Premium</span></div>;

const imageTemplate = (image, key) => (
  <div key={`${image}` + `${key}`} className="property__image-wrapper">
    <img className="property__image" src={image} alt="Photo studio" />
  </div>
);

const goodTemplate = (good, key) => (
  <li key={`${good}` + `${key}`} className="property__inside-item">
    {good}
  </li>
);

const hostProStatusTemplate = <span className="property__user-status">Pro</span>;

const descriptionTemplate = (text, key) => <p key={`paragraph-` + `${key}`} className="property__text">{text}</p>;

const Offer = (props) => {
  const {offer, authorizationStatus, onBookmark} = props;
  const {isPremium, title, isFavorite, rating, bedrooms, type, maxAdults, price, goods, host, description, images} = offer;
  const {avatarUrl, name, isPro} = host;

  const nearPlaces = useSelector((state) => state.nearPlaces);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNearPlacesAction(offer.id));
  }, [offer]);

  const propertyDescription = description.split(/[.!?]/);
  const proStatus = isPro ? hostProStatusTemplate : ``;
  const premiumMark = isPremium ? premiumMarkTemplate : ``;
  const isBookmarkedClass = isFavorite ? ` property__bookmark-button--active` : ``;
  const isBookmarkedText = isFavorite ? `In bookmarks` : `To bookmarks`;
  const ratingWidth = (rating * 100 / 5) + `%`;

  if (!nearPlaces) {
    return null;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => (imageTemplate(image, i)))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premiumMark}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button` + isBookmarkedClass + ` button`} type="button" onClick={onBookmark}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isBookmarkedText}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingWidth}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) => (goodTemplate(good, i)))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {proStatus}
                </div>
                <div className="property__description">
                  {propertyDescription.map((text, i) => descriptionTemplate(text, i))}
                </div>
              </div>
              <section className="property__reviews reviews">
                <Reviews offerId={offer.id} />
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm offerId={offer.id}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={nearPlaces}
              city={offer.city} />
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={nearPlaces} />
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape(placeCardProp).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onBookmark: PropTypes.func.isRequired
};

export default withFavoriteFlag(Offer);
