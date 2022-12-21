import React from "react";

import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

import imgbuzo from "../../assets/img/buzo.jpg";

function ItemListContainer() {
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
    </>
  );
}

export default ItemListContainer;
