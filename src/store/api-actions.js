import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffers, requireAuthorization, setDataLoadedStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';

export const fetchOffersAction = createAsyncThunk(
    `data/fetchOffers`,
    async (_arg, {dispatch, extra: api}) => {
      const {data} = await api.get(APIRoute.Hotels);
      dispatch(setDataLoadedStatus(true));
      dispatch(loadOffers(data));
      dispatch(setDataLoadedStatus(false));
    },
);

export const checkAuthAction = createAsyncThunk(
    `user/checkAuth`,
    async (_arg, {dispatch, extra: api}) => {
      try {
        await api.get(APIRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
);

export const loginAction = createAsyncThunk(
    `user/login`,
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data: {token}} = await api.post(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    },
);

export const logoutAction = createAsyncThunk(
    `user/logout`,
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
);
