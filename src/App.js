import { useState } from "react";
import "./App.css";

function App() {
  const [sortType, setSortType] = useState("year");
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
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
    </div>
  );
}

export default App;
