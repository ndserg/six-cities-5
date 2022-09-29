import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Offer from '../offer/offer';
import {fetchOfferAction} from '../../store/api-actions';

const Room = () => {
  const offer = useSelector((state) => state.offer);
  const authState = useSelector((state) => state.authorizationStatus);
  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (!offer || offer.id !== Number(id)) {
      dispatch(fetchOfferAction(id));
    }
  }, [id, offer]);

  if (!offer) {
    return null;
  }

  return (
    <Offer
      offer={offer}
      authorizationStatus={authState}
    />
  );
};

Room.propTypes = {

};

export default Room;
