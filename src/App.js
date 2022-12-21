import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navegacion from "./components/Navbar.jsx";
import NotFound from "./components/NotFound.jsx";
import DetalleProd from "./components/Productos/DetalleProd";
import { CartProvider } from "./Context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalleprod" element={<DetalleProd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
