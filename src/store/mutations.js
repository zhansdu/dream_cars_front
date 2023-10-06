export default {
  setPopularCars: (state, cars) => {
    state.popular_cars = cars;
  },
  setSearchCars: (state, cars) => {
    state.search_cars = cars;
  },
  setNews: (state, news) => {
    state.news = news;
  },
  setExchangeRate: (state, exchangeRate) => {
    state.currentCurrency = exchangeRate;
  }
};
