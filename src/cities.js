const getUniqueCities = (offers) => {
  const cities = {};

  offers.forEach((offer) => (cities[offer.city.name] = offer.city));

  return cities;
};

const getFilterdOffers = (selectedCity, offers) => {
  return offers.filter((offer) => offer.city.name === selectedCity);
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

export {getUniqueCities, getFilterdOffers, getSortedOffers};
