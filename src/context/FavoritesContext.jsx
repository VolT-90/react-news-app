import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);
const STORAGE_KEY = "news-favorites";

export function FavoritesProvider({ children }) {
  // Store whole articles so the Favorites page needs no extra request.
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      /* storage unavailable: favorites still work in memory */
    }
  }, [favorites]);

  const isFavorite = (id) => favorites.some((a) => a.id === id);
  const addFavorite = (article) =>
    setFavorites((prev) => (prev.some((a) => a.id === article.id) ? prev : [...prev, article]));
  const removeFavorite = (id) => setFavorites((prev) => prev.filter((a) => a.id !== id));

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside <FavoritesProvider>");
  return ctx;
}
