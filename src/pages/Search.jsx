import { useSearchParams } from "react-router-dom";
import NewsFeed from "../components/NewsFeed";
import { listUrl } from "../api/newsApi";
import SearchBar from "../components/SearchBar";

function Search() {
  const [params] = useSearchParams();
  const term = (params.get("q") || "").trim();

  return (
    <>
      <SearchBar />
      {term ? (
        <>
          <h1>Showing results for: {term}</h1>
          <NewsFeed url={listUrl(term)} />
        </>
      ) : (
        <p className="status">Type a search term above to find news.</p>
      )}
    </>
  );
}

export default Search;
