import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers} from '../store/action';
import offers from "../mocks/offers";

const initialState = {
  city: `Amsterdam`,
  places: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const {currentCity} = action.payload;
      state.city = currentCity;
    })
    .addCase(loadOffers, (state, action) => {
      const {allOffers} = action.payload;
      state.places = allOffers;
    });
});

export {reducer};
