import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
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
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          <button onClick={() => addItemToCart(product)}>
            Agregar a tu carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

// import React from "react";
// import AllProductos from "../pizzas.json";
// import BTN_ADD from "./Btn_Add";
// import BTN_VER_MAS from "./Btn_Ver_Mas";

// const Productos = () => {
//   const data = AllProductos;

//   return (
//     <div className="cards">
//       {data.map((producto, index) => {
//         return (
//           <div className="container-productos">
//             <img
//               className="img-producto"
//               src={producto.img}
//               alt={producto.name}
//             />
//             <h2>{producto.name}</h2>
//             <hr></hr>
//             <div className="container-ingred">
//               <h5>Ingredientes:</h5>
//               <p key={index}>🍕 {producto.ingredients[0]}</p>
//               <p key={index}>🍕 {producto.ingredients[1]}</p>
//               <p key={index}>🍕 {producto.ingredients[2]}</p>
//               <p key={index}>🍕 {producto.ingredients[3]}</p>
//             </div>
//             <p>${producto.price}</p>
//             <div className="container-btn">
//               <BTN_VER_MAS />
//               <BTN_ADD />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Productos;
