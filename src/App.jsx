import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import PluginsDisplay from "./Components/AudioPlugins/PluginsDisplay";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import EquipmentDisplay from "./Components/Equipment/EquipmentDisplay";
import Home from "./Components/Home/Home";
import NavBarView from "./Components/NavBar/NavBarView";
import ProductView from "./Components/ProductView/ProductView";
import SynthesizersDisplay from "./Components/Synthesizers/SynthesizersDisplay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarView />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plugins" element={<PluginsDisplay />} />
          <Route path="synthesizers" element={<SynthesizersDisplay />} />
          <Route path="equipment" element={<EquipmentDisplay />} />
          <Route path="/product/:productId" element={<ProductView />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
