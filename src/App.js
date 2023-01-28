import "./App.scss";
import "./navbar.css";
import NavBar from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { CartContextProvider } from "./storage/cartContext";
import CartContainer from "./components/cartContainer/cartContainer";

import { app } from "./services/firebase";
import { getItems } from "./services/firebase";

function App() {
  //TESTING FIREBASE
  getItems();

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<HomePage />} />

            <Route path="/item/:itemid" element={<ItemDetailContainer />} />

            <Route path="/contacto" element={<h1>Conctacto</h1>} />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
