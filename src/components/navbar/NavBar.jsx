import { Link } from "react-router-dom";
import Button, { ButtonChild } from "../button/Button";
import "./navbar.css";

function NavBar({ onLogin }) {
  let inputUsername = "Christian";

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

        <ButtonChild onTouch={() => onLogin(inputUsername)}>Login</ButtonChild>
        {/* <CartWidget/> */}
        <span>🛒</span>
      </ul>
    </nav>
  );
}

export default NavBar;
