import {createAction} from '@reduxjs/toolkit';

export const setCity = createAction(`places/changeCity`, (currentCity) => ({payload: currentCity}));
export const loadOffers = createAction(`places/setPlaces`);
