import logo from "./logo.svg";
import "./App.css";
import "./navbar.css";

// Componente APP
function App() {
  const greeting = "Bienvenidos a mi Ecommerce!";

  const mostrarCurso = () => "Comisión 43580 - React JS";

  /*   function mostrarCurso(){
    return "Comisión 43580 - React JS"
  } */

  function getRandomColor() {
    return "darkgreen";
  }

  let styleHeader = {
    backgroundColor: getRandomColor(),
    margin: "20px 10px",
    border: "solid 3px red",
  };

  // camelCase -> deEstaManera siempreConLaPrimerLetraEnMayusc
  return (
    <>
      <nav>Hola</nav>
      <section className="App">
        <div style={styleHeader} className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: "pink" }}>{mostrarCurso()}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {greeting}
            <br />
            {"Coderhouse."}
            <br />
            {10 + 20}
          </a>
          {/* soy un comentario */}
        </div>
      </section>
    </>
  );
}

export default App;
