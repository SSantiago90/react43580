import React, { useState, useEffect } from "react";
import { getItemsByCategory } from "../../services/firebase";
import { getItems } from "../../services/firebase";

import ItemList from "../itemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let { category } = useParams();

  useEffect(() => {
    if (!category) {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(category).then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    }
  }, [category]);

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
