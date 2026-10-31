import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../api/newsApi";

function CategoryNav() {
  return (
    <nav className="categories" aria-label="Categories">
      <NavLink to="/" end>All</NavLink>
      {CATEGORIES.map((name) => (
        <NavLink key={name} to={`/category/${name.toLowerCase()}`}>{name}</NavLink>
      ))}
    </nav>
  );
}

export default CategoryNav;
