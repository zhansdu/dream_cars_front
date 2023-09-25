import Landing from "@/views/Landing";
import Search from "@/views/Search";
import CarInfo from "@/views/CarInfo";
export default [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/car-info",
    name: "car_info",
    component: CarInfo
  }
];
