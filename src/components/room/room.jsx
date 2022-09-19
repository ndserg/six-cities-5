import React from "react";
import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Offer from '../offer/offer';
import {setCity} from '../../store/action';
import {fetchOfferAction, fetchCommentsAction, fetchNearPlacesAction} from '../../store/api-actions';

const Room = () => {
  const offer = useSelector((state) => state.offer);
  const comments = useSelector((state) => state.comments);
  const nearPlaces = useSelector((state) => state.nearPlaces);
  const selectedCity = useSelector((state) => state.city);
  const authState = useSelector((state) => state.authorizationStatus);
  const dispatch = useDispatch();

  const {id} = useParams();

  const isCurrentCity = () => {
    if (offer && offer.city.name && (selectedCity !== offer.city.name)) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (!offer || offer.id !== Number(id)) {
      dispatch(fetchOfferAction(id))
      .then(() => dispatch(fetchCommentsAction(id)))
      .then(() => dispatch(fetchNearPlacesAction(id)))
      .then(() => isCurrentCity() ? dispatch(setCity({currentCity: offer.city.name})) : false);
    }
  }, [id, offer, comments, nearPlaces, selectedCity]);

  if (!offer || !comments || !nearPlaces || !isCurrentCity()) {
    return null;
  }

  return (
    <Offer
      offer={offer}
      comments={comments}
      nearPlaces={nearPlaces}
      authorizationStatus={authState}
    />
  );
};

Room.propTypes = {

};

export default Room;
