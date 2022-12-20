import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pedido from "./components/ItemCart/Pedido.jsx";
import Home from "./components/Home/Home.jsx";
import Navegacion from "./components/Navbar.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
