import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Button from "../button/Button";
import "./navbar.css";
import UserMenu from "./UserMenu";

function NavBar({ onLogin }) {
  const { getTotalItems } = useContext(cartContext);

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

        <form onSubmit={(evt) => evt.preventDefault()}>
          <label>
            Ingresa tu nombre:
            <input name="username" placeholder="username" />
          </label>
          <button type="submit">Buscar</button>
        </form>

        <span>
          🛒
          {getTotalItems()}
        </span>
      </ul>
    </nav>
  );
}

export default NavBar;
