import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="status">
      <h1>Page not found</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
