import "./App.css";
import "./navbar.css";

import Examples from "./components/Examples";
import FlexWrapper from "./components/flexWrapper/FlexWrapper";
import Item from "./components/Item/Item";

import imgbuzo from "./assets/img/buzo.jpg";
import NavBar from "./components/navbar/NavBar";

// Componente APP
function App() {
  return (
    <>
      <NavBar />
      {/* <Examples /> */}
      {/* <ItemListContainer -> con prop greeting />*/}
      <FlexWrapper>
        <Item
          title="Remera"
          price={400}
          detail="La mejor remera del mercado"
          imgurl="https://deliverind.com.ar/wp-content/uploads/2022/06/REMERA-REGULAR-FIT-SOFT-22-PORTADA-01-scaled.jpg"
        />
        <Item
          title="Buzo"
          price={800}
          detail="El mejor buzo del mercado"
          imgurl={imgbuzo}
        />
        <Item
          title="Zapatilla"
          price={100}
          detail="Las mejores zapatillas del mercado"
          imgurl="/assets/img/zapatilla.webp"
        />
      </FlexWrapper>
    </>
  );
}

export default App;
