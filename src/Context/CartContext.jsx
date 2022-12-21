import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    try {
      const productosEnlocalStorage = localStorage.getItem("cartProducts");
      return productosEnlocalStorage ? JSON.parse(productosEnlocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItem));
    console.log(cartItem);
  }, [cartItem]);

  const addItemToCart = (product) => {
    const inCart = cartItem.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart) {
      setCartItem(
        cartItem.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItem([...cartItem, { ...product, amount: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cartItem.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart.amount === 1) {
      setCartItem(
        cartItem.filter((productInCart) => productInCart.id !== product.id)
      );
    } else {
      setCartItem(
        cartItem.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItem, addItemToCart, deleteItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
