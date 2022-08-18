import React from "react";
import PropTypes from "prop-types";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import placeCardProp from "../place-card/place-card.prop";
import reviewsProp from "../reviews/reviews.prop";

const App = (props) => {
  const {placesFound, offers, comments} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<Main
            placesFound={placesFound}
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
  placesFound: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardProp).isRequired).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(reviewsProp).isRequired).isRequired,
};

export default App;
