import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import { CartProvider } from "./components/context/CartContext";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const mensaje = "Hello World!";
  return (
    <div className="container-flex">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route 
            path="/" 
            element={<ItemListContainer />} 
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route 
            path="/item/:id" 
            element={<ItemDetailContainer />} 
            />
               <Route 
            path="/cart" 
            element={<Cart />} 
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
