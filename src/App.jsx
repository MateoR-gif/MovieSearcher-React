import "./App.css";
import Movies from "./components/Movies";
import { useMovies } from "./customHooks/useMovies";
import { useSearch } from "./customHooks/useSearch";

function App() {
  const { search, error, handleSearchChange } = useSearch();
  const { movies, getMovies } = useMovies({search});

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies()
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSearchChange}
            placeholder="Batman, Spiderman, John Wick..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      {error}

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
