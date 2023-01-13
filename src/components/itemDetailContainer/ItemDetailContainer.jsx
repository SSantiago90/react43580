import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import Button, { ButtonChild } from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { itemid } = useParams();
  console.log(itemid);

  // onAddtoCart
  function handleAddToCart() {
    alert(`Agregaste x ${product.title} al carrito`);
  }

  useEffect(() => {
    getSingleItem(itemid)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  return (
    /* <ItemDetail> */
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.imgurl} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
      </div>
      <ItemCount /* props */ />
      <ButtonChild>Ir al carrito</ButtonChild>
    </div>
  );
}

export default ItemDetailContainer;
