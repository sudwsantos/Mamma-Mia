import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import "./ItemCart.css"

const ItemCart = ({ item }) => {
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => addItemToCart(item)}> + </button>
            <button onClick={() => deleteItemToCart(item)}> - </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;