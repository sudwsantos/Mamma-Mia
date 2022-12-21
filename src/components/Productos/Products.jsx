import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import ProductsData from "../../Data/pizzas.json";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const { addItemToCart } = useContext(CartContext);

  const navigate = useNavigate();

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
            <p>🍕 {product.ingredients[0]}</p>
            <p>🍕 {product.ingredients[1]}</p>
            <p>🍕 {product.ingredients[2]}</p>
            <p>🍕 {product.ingredients[3]}</p>
          </div>
          <p>${product.price}</p>
          <div className="buttonContainer">
            <button onClick={() => addItemToCart(product)}>Agregar</button>
            <button
              onClick={() => {
                navigate("/detalleprod");
              }}
            >
              Ver Más
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
