import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import MensClothingDisplay from "./Components/MensClothing/MensClothingDisplay";
import WomensClothingDisplay from "./Components/WomensClothing/WomensClothingDisplay";
import JewelryDisplay from "./Components/Jewelry/JewelryDisplay";
import ElectronicsDisplay from "./Components/Electronics/ElectronicsDisplay";
import NavBarView from "./Components/NavBar/NavBarView";
import ProductView from "./Components/ProductView/ProductView";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <NavBarView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mens_clothing" element={<MensClothingDisplay />} />
        <Route path="womens_clothing" element={<WomensClothingDisplay />} />
        <Route path="jewelry" element={<JewelryDisplay />} />
        <Route path="electronics" element={<ElectronicsDisplay />} />
        <Route path="/product/:productId" element={<ProductView />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
