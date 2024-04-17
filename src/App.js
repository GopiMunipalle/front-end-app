import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";
import SingUp from "./components/SingUp";
import Login from "./components/Login";
import Home from "./components/Home";
import ItemDetails from "./components/ItemDetails";

function App() {
  const [cartList, setCartList] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addCart = (product) => {
    setCartList((prevState) => [...prevState, product]);
  };
  const deleteCart = () => {};

  const updateQuatity = () => {
    setQuantity(quantity);
  };

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartList, addCart, deleteCart }}>
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
export default App;
