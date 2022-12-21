import logo from "../logo.svg";
import Button, { ButtonChild } from "./button/Button";
import FlexWrapper from "./flexWrapper/FlexWrapper";

function Examples() {
  const greeting = "Bienvenidos a mi Ecommerce!";

  const mostrarCurso = () => "Comisión 43580 - React JS";

  /*   function mostrarCurso(){
    return "Comisión 43580 - React JS"
  } */

  function getRandomColor() {
    return "rgb(44, 54, 99)";
  }

  let styleHeader = {
    backgroundColor: getRandomColor(),
    margin: "20px 10px",
    border: "solid 3px red",
  };

  // camelCase -> deEstaManera siempreConLaPrimerLetraEnMayusc

  return (
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
        <button>Hola!</button>
      </div>

      {/* soy un comentario */}
      <FlexWrapper>
        <Button text="Botón A" color="blue" />
        <Button text="Otro botón" color="indigo" />
        <Button text="Soy el último" color="orange" />
        <ButtonChild color="darkgreen">Ver detalle</ButtonChild>
      </FlexWrapper>
      <hr />
    </section>
  );
}

export default Examples;
