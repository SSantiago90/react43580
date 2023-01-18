import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import Button, { ButtonChild } from "../button/Button";
import "./navbar.css";
import UserMenu from "./UserMenu";

function NavBar({ onLogin }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    let username = evt.target.elements[0].value;
    onLogin(username);
  }

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

        <form onSubmit={handleSubmit}>
          <label>
            Ingresa tu nombre:
            <input name="username" placeholder="username" />
          </label>
          <button type="submit">Login</button>
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
