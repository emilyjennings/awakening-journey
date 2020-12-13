import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="nav-links">
      <div className="nav-link"><Link to="/">Home</Link></div>
      <div className="nav-link"><Link to="/about">About</Link></div>
      <div className="nav-link"><Link to="/contact">Contact</Link></div>
      <div className="nav-link"><Link to="/blog">Blog</Link></div>
      <div className="nav-link"><Link to="/meditation">Meditation</Link></div>
    </div>

  );
}

export default NavLinks;
