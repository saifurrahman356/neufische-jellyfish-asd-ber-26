import { formatFilm, getWatched, type Playlist } from "./types.js";

const myPlaylist: Playlist = {
  name: "My Favorite Films",
  films: [
    { id: 1, title: "Inception", year: 2010, watched: true, rating: 5 },
    { id: 2, title: "Interstellar", year: 2014, watched: false },
    { id: 3, title: "The Dark Knight", year: 2008, watched: true, rating: 5 },
    { id: 4, title: "Avatar", year: 2009, watched: false },
    { id: 5, title: "The Matrix", year: 1999, watched: true, rating: 4 },
  ],
};

const watchedFilms = getWatched(myPlaylist);

for (const film of watchedFilms) {
  console.log(formatFilm(film));
}
