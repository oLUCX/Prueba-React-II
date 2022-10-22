import { BrowserRouter, Routes, Route } from "react-router-dom"
import ApiProvider from './context/MyContext'
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import PizzaDetalle from './views/PizzaDetalle'

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pizza/:id" element={<PizzaDetalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </div>
  );
}

export default App;
