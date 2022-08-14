import React from "react";
import PropTypes from "prop-types";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

const App = (props) => {
  const {placesFound} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/`}
          element={<Main placesFound={placesFound} />}
        />
        <Route
          path={`/login`}
          element={<Login />}
        />
        <Route
          path={`/favorites`}
          element={<Favorites />}
        />
        <Route
          path={`/offer/:id`}
          element={<Room />}
        />
      </Routes>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
};

export default App;
