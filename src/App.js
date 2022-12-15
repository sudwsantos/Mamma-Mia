import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pedido from "./views/Pedido";
import Home from "./views/Home";
import Navegacion from "./components/Navbar";
import NotFound from "./views/NotFound";

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
