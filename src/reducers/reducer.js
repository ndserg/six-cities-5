import {createReducer} from '@reduxjs/toolkit';
import {setCity, loadOffers, loadOffer, loadFavoritePlaces, clearFavoritePlaces, loadComments, loadNearPlaces, changeSortType, setActiveOffer, requireAuthorization, setDataLoadedStatus} from '../store/action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: `Amsterdam`,
  offers: [],
  offer: null,
  comments: null,
  nearPlaces: null,
  favorites: [],
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
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(loadFavoritePlaces, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(clearFavoritePlaces, (state, action) => {
      state.favorites = action.payload;
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
