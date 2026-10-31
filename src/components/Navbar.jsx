import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();
  return (
    <nav className="navbar" aria-label="Main">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">Favorites ({favorites.length})</NavLink>
    </nav>
  );
}

export default Navbar;
