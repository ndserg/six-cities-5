import React from "react";
import {useSelector} from 'react-redux';
import PropTypes from "prop-types";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import LoadingPage from "../loading-page/loading-page";
import reviewsProp from "../reviews/reviews.prop";

const App = (props) => {
  const {comments} = props;
  const offers = useSelector((state) => state.offers);
  const isDataLoaded = useSelector((state) => state.isDataLoaded);

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
          element={<Favorites
            offers={offers}
          />}
        />
        <Route
          path={`/offer/:id`}
          element={<Room
            offer={offers[0]}
            offers={offers}
            comments={comments}
          />}
        />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(reviewsProp).isRequired).isRequired,
};

export default App;
