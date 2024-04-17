import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addCart: () => {},
  deleteCart: () => {},
});

export default CartContext;
