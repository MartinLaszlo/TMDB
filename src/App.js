import { useEffect, useState } from "react";
import fetchMovies from "./API";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [page, setPage] = useState("1")

  useEffect(() => {
    fetchMovies(setMovies, setGenres, page)
    console.log(movies)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <TopNav />
      <div className="flex-grow">
        <h2>Trending:</h2>
        {movies.length > 0 && movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title} - {movie.release_date}</h1>
          </div>
        ))}
        <h2>Genres:</h2>
        {genres.length > 0 && genres.map((genre) => (
          <div key={genre.id}>
            <h1>{genre.name} - {genre.id}</h1>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
