import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from "./components/app/app";
import {fetchOffersAction, checkAuthAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = createRoot(document.querySelector(`#root`));

root.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
    </React.StrictMode>
);
