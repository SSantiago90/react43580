import React from "react";

import "./item.css";

import { ButtonChild } from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function Item({ id, title, price, detail, imgurl, discount }) {
  const urlDetail = `/item/${id}`;

  /* let stylePrice = {
    fontWeight: "bolder",
    fontSize: "18px",
    color: discount ? "green" : "inhreit",
  }; */

  let priceClassNames = `font-xl ${discount ? "price-discount" : ""}`;

  return (
    <Link to={urlDetail}>
      <div className="item-card">
        <ToggleButton icon="♥" />
        <div className="item-card_header">
          <h2>{title}</h2>
        </div>
        <div className="item-card_img">
          <img src={imgurl} alt="imagen"></img>
        </div>

        <div className="item-card_detail">
          <h4 className={priceClassNames}>$ {price}</h4>
          {/* 3. Rendering condicional con operador lógico && AND */}
          {discount && (
            <span style={{ color: "green" }}> Descuento: {discount}%</span>
          )}
          <small>{detail}</small>
        </div>

        <ButtonChild>Ver detalle</ButtonChild>
      </div>
    </Link>
  );
}

export default Item;
