import React from "react";

import "./item.css";

import Button from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import { Link } from "react-router-dom";

function Item({ item }) {
  const urlDetail = `/item/${item.id}`;

  const classNamePrice = item.discount
    ? "item-card_priceDiscount"
    : "item-card_price";

  const stylesCard = {
    color: item.stock <= 0 ? "#c3c3c3" : "black",
  };

  return (
    <div style={stylesCard} className="item-card">
      <div className="item-card_header">
        <h2>{item.name}</h2>
        {item.envio === "gratis" && <strong>Envío gratis!</strong>}
      </div>
      <div className="item-card_img">
        <img src={item.foto} alt="imagen"></img>
      </div>

      <div className="">
        <h4 className={classNamePrice}>$ {item.price}</h4>
        {item.discount && <small>{item.discount} %</small>}
        <small>{item.detail}</small>
      </div>
      {/* {item.stock > 0 && <Button>Ver detalle</Button>}
      {item.stock <= 0 && <p>No hay stock</p>} */}
      {item.stock > 0 ? (
        <Link to={urlDetail}>
          <Button>Ver detalle</Button>
        </Link>
      ) : (
        <p>No hay stock</p>
      )}
    </div>
  );
}

export default Item;
