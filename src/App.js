import "./App.scss";
import "./navbar.css";

import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// Componente APP
function App() {
  return (
    <>
      <NavBar />
      {/* <Examples /> */}
      <ItemListContainer />
    </>
  );
}

export default App;
