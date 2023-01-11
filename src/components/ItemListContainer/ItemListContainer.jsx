import React, { useState, useEffect } from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  // useParams()
  // en homepage "/" -> categoryid = undefined
  // en categoria "/category/smartphones" -> categoryid = "smartphones"
  let idcategory = "smartphones";

  useEffect(() => {
    if (idcategory) {
      getItemsByCategory(idcategory).then((respuesta) => {
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
