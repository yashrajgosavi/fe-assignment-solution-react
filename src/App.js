import { useEffect, useState } from "react";
import { fetchMovies } from "./functions/fetchMovies";
import "./App.css";

function App() {
  const [sortType, setSortType] = useState("year");
  const [searchItem, setSearchItem] = useState("");
  const [movies, setMovies] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(setMovies, setHasError, setIsLoading, setErrorMessage);
  }, [sortType, searchItem]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error: {errorMessage}</div>
      ) : (
        <>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="year">YEAR</option>
            <option value="episode">EPISODE</option>
          </select>
          <input
            type="text"
            placeholder="Search by title"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </>
      )}
    </div>
  );
}

export default App;
