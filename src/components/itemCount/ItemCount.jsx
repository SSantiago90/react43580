import { useState } from "react";
import Button, { ButtonChild } from "../button/Button";
import "./itemcount.css";

function ItemCount({ onAddToCart, stock }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    // validar -1 -2
    setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button className="btn" onClick={handleSubstract}>
          -
        </button>
        <span className="itemcount_count">{count}</span>
        <button className="btn" onClick={handleAdd}>
          +
        </button>
      </div>

      <div className="itemcount_btns">
        <button className="btn" onClick={() => onAddToCart(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
