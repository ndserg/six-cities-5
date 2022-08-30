import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers, changeSortType, setActiveOffer} from '../store/action';
import offers from "../mocks/offers";

const initialState = {
  city: `Amsterdam`,
  places: offers,
  currentSortType: `popular`,
  currentOfferId: null,
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
    })
    .addCase(changeSortType, (state, action) => {
      const {currentSortType} = action.payload;
      state.currentSortType = currentSortType;
    })
    .addCase(setActiveOffer, (state, action) => {
      const {currentOffer} = action.payload;
      state.currentOfferId = currentOffer;
    });
});

export {reducer};
