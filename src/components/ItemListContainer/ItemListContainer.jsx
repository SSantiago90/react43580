import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let idcategory = undefined;

  useEffect(() => {
    if (idcategory) {
      getItems(idcategory).then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    }
  }, []);

  //1 -> Rendering con Ternary Operator
  return (
    <>
      <div>
        {products.length === 0 ? (
          <Loader color="pink" />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
