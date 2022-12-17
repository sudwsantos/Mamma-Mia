import React from "react";
import BTN_ADD from "./Btn_Add";
import AllProductos from "../pizzas.json";

const Pizza = () => {
  const data = AllProductos;

{
  // El useState me ayudará a que se renderice una pura vez. Como esta ahora me muestra todos los productos en pantalla de una
}

  return (
    <div className="contenedor-ver-mas">
      {data.map((pizza, index) => {
        return (
          <div className="contenedor-pizza">
            <img src={pizza.img} alt={pizza.name} />
            <div>
              <h2>{pizza.name}</h2>
              <p>{pizza.desc}</p>
              <h5>Ingredientes:</h5>
              <p key={index}>🍕 {pizza.ingredients[0]}</p>
              <p key={index}>🍕 {pizza.ingredients[1]}</p>
              <p key={index}>🍕 {pizza.ingredients[2]}</p>
              <p key={index}>🍕 {pizza.ingredients[3]}</p>
              <div>${pizza.price}</div>
            </div>
            <BTN_ADD />
          </div>
        );
      })}
    </div>
  );
};

export default Pizza;
