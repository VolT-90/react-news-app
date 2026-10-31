import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const term = search.trim();

    if (term.length < 2) {
      setError("Search must contain at least 2 characters.");
      return;
    }
    setError("");
    navigate(`/search?q=${encodeURIComponent(term)}`);
  }

  function handleClear() {
    setSearch("");
    setError("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit} role="search">
      <label htmlFor="search" className="sr-only">Search news</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search news..."
      />
      <button type="submit">Search</button>
      <button type="button" className="secondary" onClick={handleClear}>Clear</button>
      {error && <p className="error" role="alert">{error}</p>}
    </form>
  );
}

export default SearchBar;
