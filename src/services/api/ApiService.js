import axios from "axios";
const getLink = (link) => {
  return "http://185.195.27.207:8080/api" + link;
};
export const get = (link, params) => {
  link = getLink(link);
  return axios.get(link, params);
};
