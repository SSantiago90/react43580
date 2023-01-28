import { Link } from "react-router-dom";
import Button from "../button/Button";
import CartWidget from "./CartWidget";
import "./navbar.css";
import UserMenu from "./UserMenu";

function NavBar({ onLogin }) {
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
          <Button type="submit" color="black">
            Buscar
          </Button>
        </form>

        <CartWidget />
      </ul>
    </nav>
  );
}

export default NavBar;
