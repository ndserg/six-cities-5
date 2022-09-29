import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import PrivateRoute from '../../components/private-route/private-route';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import LoadingPage from "../loading-page/loading-page";
import {AuthorizationStatus} from '../../const';
import {clearFavoritePlaces} from '../../store/action';
import {fetchFavoritesAction} from '../../store/api-actions';

const App = () => {
  const isDataLoaded = useSelector((state) => state.isDataLoaded);
  const authState = useSelector((state) => state.authorizationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    } else {
      dispatch(clearFavoritePlaces());
    }
  });

  if (isDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<Main
          />}
        />
        <Route
          path={`/login`}
          element={<Login />}
        />
        <Route
          path={`/favorites`}
          element={
            <PrivateRoute authorizationStatus={authState}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`/offer/:id`}
          element={<Room />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
