export interface Watchable {
  readonly id: number;
  title: string;
  year: number;
}

export interface Film extends Watchable {
  watched: boolean;
  rating?: 1 | 2 | 3 | 4 | 5;
}

export interface Playlist {
  name: string;
  films: Film[];
}

export function formatFilm(film: Film): string {
  const status = film.watched ? "Watched" : "Not watched";
  const rating = film.rating !== undefined ? `Rating: ${film.rating}` : "";
  return `${film.title} (${film.year}) - ${status}${rating}`;
}

export function getWatched(playlist: Playlist): Film[] {
  return playlist.films.filter((f) => f.watched === false);
}
