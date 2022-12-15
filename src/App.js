import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pedido from './views/Pedido';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
      <Home />
      <Pedido />


      </BrowserRouter>
    </div>
  );
}

export default App;
