import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/app/app";

const root = createRoot(document.querySelector(`#root`));

const Settings = {
  PLACES_FOUND: 312,
};

root.render(
    <React.StrictMode>
      <App
        placesFound={Settings.PLACES_FOUND}
      />
    </React.StrictMode>
);
