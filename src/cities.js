const getUniqueCities = (offers) => {
  const cities = {};

  offers.forEach((offer) => (cities[offer.city.name] = offer.city));

  return cities;
};

const getFilterdOffers = (offers, selectedCity) => {
  return offers.filter((offer) => offer.city.name === selectedCity);
};

const getFavorites = (offers) => {
  const favorites = offers.slice().filter((offer) => offer.isPremium === true);
  const favoritesList = {};

  favorites.forEach((offer) => {
    if (favoritesList.hasOwnProperty(offer.city.name)) {
      favoritesList[offer.city.name].push(offer);
    } else {
      favoritesList[offer.city.name] = [];
      favoritesList[offer.city.name].push(offer);
    }
  });

  const favoritsSorted = Object.keys(favoritesList).sort().reduce(
      (obj, key) => {
        obj[key] = favoritesList[key];
        return obj;
      },
      {}
  );

  return favoritsSorted;
};

const getSortedOffers = (offers, sortType) => {
  const sortTypes = {
    popular: () => offers,
    priceUp: () => offers.slice().sort((a, b) => a.price - b.price),
    priceDown: () => offers.slice().sort((a, b) => b.price - a.price),
    byRating: () => offers.slice().sort((a, b) => b.rating - a.rating),
  };

  return sortTypes[sortType]();
};

export {getUniqueCities, getFilterdOffers, getSortedOffers, getFavorites};
