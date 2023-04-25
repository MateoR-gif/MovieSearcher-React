import { useState } from "react";
import withoutResults from "../mocks/no-results.json";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      fetch(`http://www.omdbapi.com/?apikey=3ce2297e&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovies(json);
        });
    } else {
      setResponseMovies(withoutResults);
    }
  };
  return { movies: mappedMovies, getMovies };
}
