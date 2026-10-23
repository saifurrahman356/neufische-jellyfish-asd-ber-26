import type { Film, Playlist } from "../types.js";

export function formatFilm(film: Film): string {
  const status = film.watched ? "Watched" : "Not watched";
  const rating = film.rating !== undefined ? `Rating: ${film.rating}` : "";
  return `${film.title} (${film.year}) - ${status}${rating}`;
}

export function getWatched(playlist: Playlist): Film[] {
  return playlist.films.filter((f) => f.watched === false);
}
