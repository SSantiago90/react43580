import React from "react";

function CartWidget() {
  let countInCart = 0;

  return (
    // Cond Rend con operador AND &&
    <span>🛒 {countInCart !== 0 && countInCart}</span>
  );
}

export default CartWidget;
