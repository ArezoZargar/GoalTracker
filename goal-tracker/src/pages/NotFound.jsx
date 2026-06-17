import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>404</h1>

      <p>Page Not Found</p>

      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;