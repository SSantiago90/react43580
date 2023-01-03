import React, { useState, useEffect } from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  console.log("Renderizamos el componente...");

  useEffect( () => {
    getItems().then((respuesta) => {
      console.log(respuesta);
      setProducts(respuesta);
    });
   }, [])
  

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
