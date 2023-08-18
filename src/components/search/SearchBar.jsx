import { useState } from "react";
import { Search } from "./components/Search";
import { SearchResultsList } from "./components/SearchResultsList";

export default function SearchBar() {
  const [results, setResults] = useState([]);

  return (
    <div className="SearchBar">
      <div className="search-bar-container">
              <Search setResults={setResults} />
              {console.log("from searchbar", results)}
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}