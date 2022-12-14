import React from 'react'
import AllProductos from "../pizzas.json";

const Pizza = () => {
  const data = AllProductos;

  return (
    <div className='contenedor-ver-mas'>
      {data.map((pizza) => {
        return (
          <div className='contenedor-pizza'>
            <img src={pizza.img} alt={pizza.name} />
            <div>
              <h2>{pizza.name}</h2>
              <p>{pizza.desc}</p>
              <ul>
                <li>{{ingredients}}</li>
              </ul>
              <div>${pizza.price}</div>
            </div>
            <button>Añadir 🛒</button>
          </div>
        )
      })}
      

    </div>
  )
}

export default Pizza