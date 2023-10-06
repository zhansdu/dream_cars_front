export default {
  popular_cars: [],
  search_cars: [],
  carParams: {
    category__name: null,
    transmission_type: null, // auto || manual
    brand__name: null,
    model__name: null,
    color__name: null,
    fuel_type__name: null,
    capacity: null,
    doors: null,
    mileage: 0,
    min_price: null,
    max_price: null,
    max_tank: null,
    min_tank: null,
    name: null,
    limit: null, // how many items seen in the page
    offset: null // which item to start page with
  },
  news: [],
  currentCurrency: {
    title: "USD"
  }
};
