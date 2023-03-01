import "./App.css";
import NavBarView from "./Components/NavBar/NavBarView";
import { ProductsDisplay } from "./Components/ProductsDisplay/ProductsDisplay";

function App() {
  return (
    <div className="App">
      <NavBarView />
      <ProductsDisplay />
    </div>
  );
}

export default App;
