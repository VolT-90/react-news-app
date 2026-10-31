import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">📰 React News</Link>
      <p>Spaceflight stories from around the world</p>
    </header>
  );
}

export default Header;
