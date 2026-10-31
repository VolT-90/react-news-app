import useNews from "../hooks/useNews";
import NewsList from "./NewsList";

// Fetches a list URL and renders the four UI states: loading, error, empty, success.
function NewsFeed({ url, emptyMessage = "No news found. Try another search." }) {
  const { data, loading, error, retry } = useNews(url);

  if (loading) return <p className="status" role="status">Loading news...</p>;

  if (error) {
    return (
      <div className="status">
        <p className="error">Unable to load news. ({error})</p>
        <button onClick={retry}>Try Again</button>
      </div>
    );
  }

  const articles = data?.results ?? [];
  if (articles.length === 0) return <p className="status">{emptyMessage}</p>;

  return <NewsList articles={articles} />;
}

export default NewsFeed;
