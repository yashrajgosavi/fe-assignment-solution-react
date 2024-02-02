export async function fetchMovies(
  setMovies,
  setHasError,
  setIsLoading,
  setErrorMessage
) {
  try {
    const response = await fetch("https://swapi.dev/api/films/?format=json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setMovies(data.results);
  } catch (error) {
    console.error("Error fetching Star Wars movies:", error);
    setErrorMessage(error.message);
    setHasError(true);
  } finally {
    setIsLoading(false);
  }
}
