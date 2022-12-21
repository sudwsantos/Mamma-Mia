import React from "react";
import Products from "../Productos/Products.jsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <div className="contenido-photo contenedor">
          <h1>!Pizzería Mamma Mia!</h1>
          <h4>!Tenemos las mejores pizzas que podrás encontrar!</h4>
        </div>
      </div>
      <div className="home">
        <Products />
      </div>
    </>
  );
};

export default Home;
