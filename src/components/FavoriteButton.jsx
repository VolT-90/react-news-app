import { useFavorites } from "../context/FavoritesContext";

function FavoriteButton({ article }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const saved = isFavorite(article.id);

  return (
    <button
      className={saved ? "fav active" : "fav"}
      aria-pressed={saved}
      onClick={() => (saved ? removeFavorite(article.id) : addFavorite(article))}
    >
      {saved ? "♥ Favorited" : "♡ Favorite"}
    </button>
  );
}

export default FavoriteButton;
