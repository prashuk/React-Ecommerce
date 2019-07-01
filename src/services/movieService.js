import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.apiURL + "/movies");
}

export function getMovie(movieId) {
  return http.get(config.apiURL + "/movies/" + movieId);
}

export function deleteMovie(movieId) {
  http.delete(config.apiURL + "/movies/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(config.apiURL + "/movies/" + movie._id, body);
  }

  return http.post(config.apiURL + "/movies", movie);
}
