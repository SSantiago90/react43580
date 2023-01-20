import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartContainer() {
  const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);

  return (
    <div>
      <h1>Tu carrito</h1>
      <div>
        {cart.map((item) => (
          <div className="cart-item">
            <h3>{item.title}</h3>
            <img width="100" src={item.imgurl} alt="img" />
            <p>${item.price}</p>
            <p>{item.count}</p>
            <button>X</button>
          </div>
        ))}
      </div>
      <small>El total de tu compra es de:${getTotalPriceInCart()}</small>
    </div>
  );
}

export default CartContainer;
