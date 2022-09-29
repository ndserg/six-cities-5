import React from "react";
import {useDispatch} from 'react-redux';
import {setActiveOffer} from '../../store/action';

const withActiveCard = (Component) => {
  const WithActiveCard = (props) => {
    const dispatch = useDispatch();

    const activeCardHandler = (offer) => {
      dispatch(setActiveOffer({currentOffer: offer}));
    };

    return (
      <Component
        {...props}
        onHover={(evt) => activeCardHandler(evt.currentTarget.id)}
        onBlur={() => activeCardHandler(null)}
      />
    );
  };

  WithActiveCard.propTypes = {};

  return WithActiveCard;
};

export default withActiveCard;
