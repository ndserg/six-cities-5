import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from "./components/app/app";
import comments from "./mocks/comments";
import offers from "./mocks/offers";

const root = createRoot(document.querySelector(`#root`));

root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App
          offers={offers}
          comments={comments}
        />
      </Provider>
    </React.StrictMode>
);
