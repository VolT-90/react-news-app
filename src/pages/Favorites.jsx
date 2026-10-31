import { Link } from "react-router-dom";
import NewsList from "../components/NewsList";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="status">
        <p>You haven't saved any articles yet.</p>
        <Link to="/">Browse the latest news</Link>
      </div>
    );
  }

  return (
    <>
      <h1>Your Favorites ({favorites.length})</h1>
      <NewsList articles={favorites} />
    </>
  );
}

export default Favorites;
