import axios from "axios";
import {getToken} from './token';

const BACKEND_URL = `https://11.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
      (response) => response,

      (error) => {
        const {response} = error;

        if (response.status === HttpCode.Unauthorized) {
          return onUnauthorized();
        }

        return Promise.reject(error);
      },
  );

  api.interceptors.request.use(
      (config) => {
        const token = getToken();

        if (token) {
          config.headers[`x-token`] = token;
        }

        return config;
      },
  );

  return api;
};
