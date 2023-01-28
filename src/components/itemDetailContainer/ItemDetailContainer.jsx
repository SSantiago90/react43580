import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import { cartContext } from "../../storage/cartContext";
import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { itemid } = useParams();

  const { addItem, removeItem } = useContext(cartContext);

  // onAddtoCart
  function handleAddToCart(count) {
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
      <ItemCount onAddToCart={handleAddToCart} />
      <Button>Ir al carrito</Button>
      <button onClick={() => removeItem(product.id)}>Eliminar Item</button>
      <button>Vaciar Carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
