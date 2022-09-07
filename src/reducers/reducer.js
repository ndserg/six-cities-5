import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers, changeSortType, setActiveOffer, requireAuthorization, setDataLoadedStatus} from '../store/action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: {
    name: `Amsterdam`,
    location: [52.38333, 4.9]
  },
  offers: [],
  currentSortType: `popular`,
  currentOfferId: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setCity, (state, action) => {
      const {currentCity} = action.payload;
      state.city = currentCity;
    })
    .addCase(changeSortType, (state, action) => {
      const {currentSortType} = action.payload;
      state.currentSortType = currentSortType;
    })
    .addCase(setActiveOffer, (state, action) => {
      const {currentOffer} = action.payload;
      state.currentOfferId = currentOffer;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
