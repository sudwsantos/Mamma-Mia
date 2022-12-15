import React from "react";
import AllProductos from "../pizzas.json";

const Productos = () => {
  const data = AllProductos;

  return (
    <div className="cards">
      {data.map((producto, index) => {
        return (
          <div className="container-productos">
            <img
              className="img-producto"
              src={producto.img}
              alt={producto.name}
            />
            <h2>{producto.name}</h2>
            <hr></hr>
            <div className="container-ingred">
              <h5>Ingredientes:</h5>
              <p key={index}>🍕 {producto.ingredients[0]}</p>
              <p key={index}>🍕 {producto.ingredients[1]}</p>
              <p key={index}>🍕 {producto.ingredients[2]}</p>
              <p key={index}>🍕 {producto.ingredients[3]}</p>
            </div>
            <p>${producto.price}</p>
            <div className="container-btn">
              <button className="btn1">Ver Más 👀</button>
              <button className="btn2">Añadir 🛒</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Productos;
