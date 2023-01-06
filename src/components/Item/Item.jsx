import React, { useState } from "react";

import "./item.css";

import { ButtonChild } from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";

function Item({ title, price, detail, imgurl }) {
  return (
    <div className="item-card">
      <ToggleButton icon="♥" />
      <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={imgurl} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <small>{detail}</small>
      </div>
      <ButtonChild>Ver detalle</ButtonChild>
    </div>
  );
}

export default Item;
