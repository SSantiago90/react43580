import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
 // Rendering condicional: "carrito vacio" -> buton al inicio
  return (
    <div>
      <div>Tu Carrito</div>
      {cart.map((item) => (
        <div>
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
          <h4>{item.count}</h4>
          <button onClick={() => removeItem(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
