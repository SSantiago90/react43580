import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <a href="/">Logo</a>
          </li>
        </h2>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Remeras
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Buzos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Zapatillas
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
