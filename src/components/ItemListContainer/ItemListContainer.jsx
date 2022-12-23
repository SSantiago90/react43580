import React, { useState, useEffect } from "react";

import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

import imgbuzo from "../../assets/img/buzo.jpg";

function ItemListContainer() {
  const [toggle, setToggle] = useState(false);
  const [otroToggle, setOtroToggle] = useState(false);

  console.log("%cRenderizando ItemListContainer...", "background-color: blue");

  useEffect(() => {
    console.log(
      "%cObteniendo items de la base de datos",
      "background-color: green"
    );
  }, []);

  useEffect(() => {
    console.log("%cEffecto deependiente de Toggle", "background-color: orange");
  }, [toggle]);

  const productoA = {
    title: "Remera",
    price: 450,
    detail: "La mejor remera del mercado",
    imgurl:
      "https://deliverind.com.ar/wp-content/uploads/2022/06/REMERA-REGULAR-FIT-SOFT-22-PORTADA-01-scaled.jpg",
  };

  return (
    <>
      <FlexWrapper>
        <Item
          title={productoA.title}
          price={productoA.price}
          detail={productoA.detail}
          imgurl={productoA.imgurl}
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
      <button onClick={() => setToggle(!toggle)}>Toggle State</button>
      <button onClick={() => setOtroToggle(!toggle)}>Otro Toggle</button>
    </>
  );
}

export default ItemListContainer;
