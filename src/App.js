import { useState } from "react";
import "./App.css";

function App() {
  const [sortType, setSortType] = useState("year");
  return (
    <select onChange={(e) => setSortType(e.target.value)}>
      <option value="year">YEAR</option>
      <option value="episode">EPISODE</option>
    </select>
  );
}

export default App;
