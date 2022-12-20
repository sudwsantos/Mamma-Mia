import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import ItemCart from "../ItemCart/Pedido.jsx"
import "./Cart.css"

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const { cartItem } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItem.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItem]);

  const total = cartItem.reduce(
    (previous, current) => previous + current.price,
    0
  );

  return (
    <div className="cartContainer">
      <div
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
        className="buttonCartContainer"
      >
        <div className="buttonCart">
          {!cartOpen ? <div>🛒</div> : <div>❌</div>}
        </div>
        {!cartOpen && <div className="productdNumber">{productsLength}</div>}
      
      </div>
      {cartItem && cartOpen && (
        <div className="cart">
          <h2>Tu carrito</h2>

          {cartItem.length === 0 ? (
            <p className="cartVacio">Tu carrito está vacío!</p>
          ) : (
            <div className="productsContainer">
              {cartItem.map((item, i) => {
                return <ItemCart kei={i} item={item} />;
              })}
            </div>
          )}
          <h2 className="total">Total: ${total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
