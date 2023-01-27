import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleItem } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import Button, { ButtonChild } from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isInCart, setIsInCart] = useState(false);

  let { itemid } = useParams();

  const { cart, addItem } = useContext(cartContext);

  const itemInCart = cart.find((item) => item.id === product.id);

  let stockUpdated;

  if (itemInCart) stockUpdated = product.stock - itemInCart.count;
  else stockUpdated = product.stock;

  // onAddtoCart
  function handleAddToCart(count) {
    setIsInCart(true);
    alert(`Agregaste ${count} de ${product.title} al carrito`);
    product.count = count;
    addItem(product);
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

      <ItemCount stock={stockUpdated} onAddToCart={handleAddToCart} />

      <Link to="/cart">
        <ButtonChild>Ir al carrito</ButtonChild>
      </Link>
    </div>
  );
}

export default ItemDetailContainer;
