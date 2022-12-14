import React from "react";
import AllProductos from "../pizzas.json";

const Productos = () => {
  const data = AllProductos;
  console.log(data);

  return (
    <div className="cards">
      {data.map((producto) => {
        return (
          <div className="container-productos">
            <img className="img-producto" src={producto.img} alt={producto.name} />
            <h2>{producto.name}</h2>
            <ul>
              <li>🍕{producto.ingredients}</li>
            </ul>
            <div>${producto.price}</div>
            <div>
              <button>Ver Más 👀</button>
              <button>Añadir 🛒</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Productos;
