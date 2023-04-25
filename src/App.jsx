import "./App.css";
import withResults from './mocks/with-results.json'
import Movies from "./components/Movies";


function App() {
  const movies = withResults.Search
  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form>
          <input placeholder="Batman, Spiderman, John Wick..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  );
}

export default App;
