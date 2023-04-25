function renderResults({ movies }) {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function renderNoResults() {
  return <img src="https://http.cat/404" alt="not found"></img>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? renderResults({ movies }) : renderNoResults();
}
