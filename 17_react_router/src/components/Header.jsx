import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="headerStyle">
            HOME ✰
          </Link>
          <Link to="/board" className="headerStyle">
            BOARD ✉︎
          </Link>
          <Link to="/profile" className="headerStyle">
            MYPAGE ♥︎
          </Link>
          <Link to="/products" className="headerStyle">
            Product ♥︎
          </Link>
          <Link to="/photos" className="headerStyle">
            Photo ♥︎
          </Link>
        </nav>
      </header>
    </>
  );
}
