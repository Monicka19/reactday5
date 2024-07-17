import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/reactday5" element={<ProductList />} />
            <Route path="/reactday5/cart" element={<Cart />} />
            <Route path="/reactday5/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

