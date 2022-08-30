import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction(`places/changeCity`, (currentCity) => ({payload: currentCity}));
export const loadOffers = createAction(`places/setPlaces`);
export const changeSortType = createAction(`places/changeSortType`, (currentSortType) => ({payload: currentSortType}));
export const setActiveOffer = createAction(`places/setActiveOffer`, (currentOffer) => ({payload: currentOffer}));
