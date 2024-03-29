import useCopy from "../hooks/useCopy";
const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
  let [cart, setCart] = useState([]);

  const newCart = useCopy(cart);

  function addItem(item) {
    // shallow copy - deep copy (JSON)
    //let newCart = cart.map( item => item )
    /* let newCart = [...cart]
    newCart.push(item);
    setCart(newCart) */
    const isInCart = cart.some((itemInCart) => itemInCart.id === item.id);

    if (isInCart) {
      let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
      alert("el item ya está en el carrito");
    } else {
      setCart([...cart, item]);
    }
  }

  function removeItem(idToDel) {
    setCart(cart.pop());
  }

  function clearCart() {
    /* Vaciar el carrito */
  }

  function getTotalItems() {
    let total = 0;
    cart.forEach((item) => (total += 1));
    return total;
  }

  function getTotalPriceInCart() {
    return 999;
  }

  function updateQty(id, count) {
    let index = newCart.findIndex((item) => item.id === id);
    newCart[index].count += count;
    setCart(newCart);
  }

  const value = {
    cart,
    addItem,
    getTotalItems,
    getTotalPriceInCart,
    removeItem,
    updateQty,
  };

  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}
