import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAsyncService";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItem().then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return (
    <>
      {/* <ItemDetail */}
      <h1>Titulo: {product.title} </h1>
      <img src={product.imgurl} />
    </>
  );
}

export default ItemDetailContainer;
