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
  Login: `/login`,
  Logout: `/logout`,
};

export {sortTypes, AuthorizationStatus, APIRoute};
