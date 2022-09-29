import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffers, loadOffer, loadFavoritePlaces, loadComments, loadNearPlaces, requireAuthorization, setDataLoadedStatus} from './action';
import {saveToken, dropToken} from '../services/token';
import {saveUserName, dropUserName} from '../services/user-name';
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

export const fetchFavoritesAction = createAsyncThunk(
    `data/fetchFavorites`,
    async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(APIRoute.Favorite);
        dispatch(loadFavoritePlaces(data));
      } catch {
        console.log(`error`);
      }
    },
);

export const fetchOfferAction = createAsyncThunk(
    `data/fetchOffer`,
    async (id, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(`${APIRoute.Hotels}/${id}`);
        dispatch(loadOffer(data));
      } catch {
        console.log(`error`);
      }
    },
);

export const fetchNearPlacesAction = createAsyncThunk(
    `data/fetchOffer`,
    async (id, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(`${APIRoute.Hotels}/${id}/nearby`);
        dispatch(loadNearPlaces(data));
      } catch {
        console.log(`error`);
      }
    },
);

export const fetchCommentsAction = createAsyncThunk(
    `data/fetchComments`,
    async (id, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get(`${APIRoute.Comments}/${id}`);
        dispatch(loadComments(data));
      } catch {
        console.log(`error`);
      }
    },
);

export const postCommentAction = createAsyncThunk(
    `data/postComment`,
    async ({id, inputValues: {review: comment, rating}}, {dispatch, extra: api}) => {
      try {
        const {data} = await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
        dispatch(loadComments(data));
      } catch {
        console.log(`error`);
      }
    },
);

export const setFavoriteAction = createAsyncThunk(
    `data/setFavorite`,
    async ({id, isBookmark}, {dispatch, extra: api}) => {
      try {
        const {data} = await api.post(`${APIRoute.Favorite}/${id}/${isBookmark}`);
        dispatch(loadOffer(data));
      } catch {
        console.log(`error`);
      }
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
      saveUserName(email);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    },
);

export const logoutAction = createAsyncThunk(
    `user/logout`,
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dropUserName();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
);
