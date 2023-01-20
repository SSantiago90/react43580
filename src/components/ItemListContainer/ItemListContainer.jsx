import React, { useState, useEffect } from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";
import Loader from "../Loader/Loader";
import Notification from "../notification/Notification";

import "./alert.css";
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [notification, setNotification] = useState({
    type: "info",
    text: "Cargando datos",
  });

  let idcategory = undefined;

  // con .then .catch
  /*  useEffect(() => {
    if (idcategory) {
      getItems(idcategory).then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
      });
    }
  }, []); */

  //con async await - try catch
  async function getProducts() {
    if (!idcategory) {
      try {
        let response = await getItems();
        setProducts(response);
        setNotification({
          type: "default",
          text: `Se cargaron ${response.length} productos correctamente...`,
        });
      } catch (error) {
        alert(error);
        setNotification({
          type: "danger",
          text: `Error cargando los productos: ${error}`,
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      let response = await getItemsByCategory(idcategory);
      setProducts(response);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {notification.type && <Notification notification={notification} />}

      {isLoading ? (
        <Loader color="blue" size={500} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
