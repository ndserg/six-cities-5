import React from "react";
import {useSelector} from 'react-redux';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import PrivateRoute from '../../components/private-route/private-route';
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import LoadingPage from "../loading-page/loading-page";

const App = () => {
  const offers = useSelector((state) => state.offers);
  const isDataLoaded = useSelector((state) => state.isDataLoaded);
  const authState = useSelector((state) => state.authorizationStatus);

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
            offers={offers}
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
              <Favorites
                offers={offers}
              />
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
