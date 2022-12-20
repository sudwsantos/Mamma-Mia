import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import ProductsData from "../../Data/pizzas.json";
import "./Products.css"

const Products = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="productsContainer">
      {ProductsData.map((product, i) => (
        <div className="product" key={i}>
          <img className="imgProduct" src={product.img} alt={product.name} />
          <div>
            <h5>{product.name}</h5>
            <hr></hr>
          </div>
          <div className="container-ingred">
            <h5>Ingredientes:</h5>
            <p key={i}>🍕 {product.ingredients[0]}</p>
            <p key={i}>🍕 {product.ingredients[1]}</p>
            <p key={i}>🍕 {product.ingredients[2]}</p>
            <p key={i}>🍕 {product.ingredients[3]}</p>
          </div>
            <p>${product.price}</p>
          <button onClick={() => addItemToCart(product)}>
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;