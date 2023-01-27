import React from "react";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { orderid } = useParams();

  return (
    <div>
      <h1>OrderDetails</h1>
      <p>Gracias por tu compra, este es tu id de compar: ${orderid}</p>
    </div>
  );
}

export default OrderDetails;
