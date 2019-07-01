import http from "./httpService";
import { apiURL } from "../config.json";

export function getGenres() {
  return http.get(apiURL + "/genres");
}
