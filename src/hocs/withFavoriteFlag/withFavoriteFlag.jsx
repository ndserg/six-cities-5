import React from "react";
import {useDispatch} from 'react-redux';
import PropTypes from "prop-types";
import placeCardProp from "../../components/place-card/place-card.prop";
import {setFavoriteAction, fetchOffersAction} from '../../store/api-actions';

const withFavoriteFlag = (Component) => {
  const WithFavoriteFlag = (props) => {
    const {offer} = props;
    const dispatch = useDispatch();

    const onBookmarkHandler = () => {
      const isBookmark = offer.isFavorite ? 0 : 1;
      dispatch(setFavoriteAction({id: offer.id, isBookmark}))
      .then(() => dispatch(fetchOffersAction()));
    };

    return (
      <Component
        {...props}
        onBookmark={() => onBookmarkHandler()}
      />
    );
  };

  WithFavoriteFlag.propTypes = {
    offer: PropTypes.shape(placeCardProp).isRequired,
  };

  return WithFavoriteFlag;
};

export default withFavoriteFlag;
