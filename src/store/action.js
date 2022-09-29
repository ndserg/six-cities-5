import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction(`places/changeCity`, (currentCity) => ({payload: currentCity}));
export const changeSortType = createAction(`places/changeSortType`, (currentSortType) => ({payload: currentSortType}));
export const setActiveOffer = createAction(`places/setActiveOffer`, (currentOffer) => ({payload: currentOffer}));
export const loadOffers = createAction(`data/loadOffers`);
export const loadFavoritePlaces = createAction(`data/loadFavoritePlaces`);
export const clearFavoritePlaces = createAction(`data/clearFavoritePlaces`, () => ({payload: []}));
export const loadOffer = createAction(`data/loadOffer`);
export const loadComments = createAction(`data/loadComments`);
export const loadNearPlaces = createAction(`data/loadNearPlaces`);
export const setDataLoadedStatus = createAction(`data/setDataLoadedStatus`);
export const requireAuthorization = createAction(`user/requireAuthorization`);
