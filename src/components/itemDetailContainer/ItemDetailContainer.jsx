import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import { cartContext } from "../../storage/cartContext";
import Button from "../button/Button";
import ItemCount from "../itemCount/ItemCount";
import Loader from "../Loader/Loader";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isInCart, setIsInCart] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  let { itemid } = useParams();

  const { addItem } = useContext(cartContext);

  // onAddtoCart
  function handleAddToCart(count) {
    setIsInCart(true);
    product.count = count;
    addItem(product);
  }

  useEffect(() => {
    getSingleItem(itemid)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => {
        //alert(`Error: ${error}`)
        setErrorMessage(`Error: ${error}`);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // 2 -> if con Earyl Return  / if con return anticipado
  if (isLoading) return <Loader size={500} />;

  if (errorMessage !== null)
    return (
      <div>
        <h2>Error</h2>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    );

  return (
    /* <ItemDetail> */
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.foto} alt={product.name} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.name}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
      </div>
      {isInCart ? (
        <Link to="/cart">
          <Button>Ir al carrito</Button>
        </Link>
      ) : (
        <ItemCount onAddToCart={handleAddToCart} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
