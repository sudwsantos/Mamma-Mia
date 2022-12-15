import React from "react";

import "../App.css";
import Productos from "../components/Productos";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <div className="contenido-photo contenedor">
          <h1>!Pizzería Mamma Mia!</h1>
          <h4>!Tenemos las mejores pizzas que podrás encontrar!</h4>
        </div>
      </div>

      <Productos />
    </>
  );
};

export default Home;
