import React, { useEffect, useMemo, useState } from "react";
import { fetchMovies } from "./functions/fetchMovies";
import SelectDropdown from "./components/SelectDropdown";
import InputField from "./components/InputField";
import LoadingMessage from "./components/LoadingMessage";
import ErrorMessage from "./components/ErrorMessage";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [sortType, setSortType] = useState("year");
  const [searchItem, setSearchItem] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(setMovies, setHasError, setIsLoading, setErrorMessage);
  }, []);

  const searchAndSortedMovies = useMemo(() => {
    let filteredMovies = movies;

    if (searchItem) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    let sortedMovies = [...filteredMovies];
    if (sortType === "episode") {
      sortedMovies.sort((a, b) => a.episode_id - b.episode_id);
    } else if (sortType === "year") {
      sortedMovies.sort(
        (a, b) => parseInt(a.release_date) - parseInt(b.release_date)
      );
    }

    return sortedMovies;
  }, [movies, searchItem, sortType]);

  return (
    <div>
      {isLoading ? (
        <LoadingMessage />
      ) : hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <SelectDropdown
            value={sortType}
            options={[
              { value: "year", label: "YEAR" },
              { value: "episode", label: "EPISODE" },
            ]}
            onChange={(e) => setSortType(e.target.value)}
          />
          <InputField
            value={searchItem}
            placeholder="Search by title"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </>
      )}
      <MovieList
        movies={searchAndSortedMovies}
        onMovieClick={setSelectedMovie}
      />
    </div>
  );
}

export default App;
