import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createBuyOrder } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import { ButtonChild } from "../button/Button";

import "./cart.css";

function CartContainer() {
  const { cart } = useContext(cartContext);
  const [orderId, setOrderId] = useState(null);
  const navigateTo = useNavigate();

  async function handleCheckout(evt) {
    const items = cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      count: product.count,
    }));

    //1. modelo de orden de compra
    const order = {
      buyer: {
        name: "Santiago",
        email: "s@s.com",
        phone: 123456,
      },
      items: items,
      date: new Date(),
      total: 1000,
    };

    //2. Enviarla a firebase.js
    let id = await createBuyOrder(order);

    //3. recibir la respuesta (id) para darle una confirmacion al user
    //3.A -> dar una notificacion al usuario / sweet-alert - toastify
    //alert(id);

    //3.B usar rendering condicional
    //setOrderId(id);

    //3.C redirigir al usuario
    navigateTo(`/thank-you/${id}`);
  }

  if (orderId !== null)
    return (
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra es: {orderId}</p>
      </div>
    );

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.imgurl} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <ButtonChild color="#c63224" onClick={item.removeItem}>
                  X
                </ButtonChild>
              </td>
              <th>$ --,--</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ --,--</h4>
      </div>
      <ButtonChild onTouch={handleCheckout}>Finalizar Compra</ButtonChild>
    </>
  );
}

export default CartContainer;
