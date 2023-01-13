import React, { useState, useEffect } from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let idcategory = undefined;

  useEffect(() => {
    if (idcategory) {
      getItems(idcategory).then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    }
  }, []);

  return (
    <>
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
