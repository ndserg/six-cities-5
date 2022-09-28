const sortTypes = {
  popular: `Popular`,
  priceUp: `Price: low to high`,
  priceDown: `Price: high to low`,
  byRating: `Top rated first`,
};

const AuthorizationStatus = {
  Auth: `AUTH`,
  NoAuth: `NO_AUTH`,
  Unknown: `UNKNOWN`,
};

const APIRoute = {
  Hotels: `/hotels`,
  Comments: `/comments`,
  Favorite: `/favorite`,
  Login: `/login`,
  Logout: `/logout`,
};

const MARKER_DEFAULT = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

const MARKER_CURRENT = {
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
};

export {sortTypes, AuthorizationStatus, APIRoute, MARKER_DEFAULT, MARKER_CURRENT};
