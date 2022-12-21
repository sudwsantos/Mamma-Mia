import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ProductsData from "../../Data/pizzas.json";
import "./DetalleProd.css"

const DetalleProd = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div>
      {ProductsData.map((pizza, i) => {
        return (
          <div className="container" key={i}>
            <div className="containerDetail" >
              <img className="detailImg" src={pizza.img} alt={pizza.name} />
            </div>
            <div className="description">
              <h2>{pizza.name}</h2>
              <hr></hr>
              <p>{pizza.desc}</p>
              <h3>Ingredientes:</h3>
              <p>🍕 {pizza.ingredients[0]}</p>
              <p>🍕 {pizza.ingredients[1]}</p>
              <p>🍕 {pizza.ingredients[2]}</p>
              <p>🍕 {pizza.ingredients[3]}</p>
              <div className="divfooter">
              <h2>Precio :${pizza.price}</h2>
            <button onClick={() => addItemToCart(pizza)}>Añadir 🛒</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetalleProd;
