import "./App.scss";
import "./navbar.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
