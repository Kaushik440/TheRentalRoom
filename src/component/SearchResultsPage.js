import React from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "./SearchResults";
//import "./SearchResultsPage.css"; // Optional: Add specific styling for this page

function SearchResultsPage() {
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Fallback to an empty array if no state

  return (
    <div className="search-results-page">
      {results.length > 0 ? (
        <SearchResults results={results} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
