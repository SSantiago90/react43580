import React from "react";

import "./item.css";

import { ButtonChild } from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import { Link } from "react-router-dom";

function Item({ id, title, price, detail, imgurl }) {
  const urlDetail = `/item/${id}`;

  return (
    <div className="item-card">
      <ToggleButton icon="♥" />
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <Link to={urlDetail}>
        <div className="item-card_img">
          <img src={imgurl} alt="imagen"></img>
        </div>
      </Link>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <small>{detail}</small>
      </div>
      <Link to={urlDetail}>
        <ButtonChild>Ver detalle</ButtonChild>
      </Link>
    </div>
  );
}

export default Item;
