import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">miTienda</Link>
          </li>
        </h2>

        <li className="nav-item">
          <Link className="nav-link" to="/category/smartphones">
            Smarphones
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/category/laptops">
            Laptops
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://www.wikipedia.org">
            Wikipedia
          </a>
        </li>

        {/* <CartWidget/> */}
        <span>🛒</span>
        {/* FontAwsome */}
      </ul>
    </nav>
  );
}

export default NavBar;
