const getUniqueCities = (offers) => {
  const citiesAll = [];

  offers.forEach((offer) => citiesAll.push(offer.city.name));

  const citiesUnique = new Set(citiesAll);

  return Array.from(citiesUnique).sort();
};

const getFilterdOffers = (selectedCity, offers) => {
  return offers.filter((offer) => offer.city.name === selectedCity);
};

export {getUniqueCities, getFilterdOffers};
