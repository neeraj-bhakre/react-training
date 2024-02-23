import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import HomeComponent from './HomeComponent';
import ProductList from './ProductList';
import './AppRouter.css';
import Cart from './Cart';

const AppRouter = () => (
  <Router>
    <h1>Pharma Store</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pharma-product-list">Product Details</Link>
      <Link to="/store">Cart</Link>
    </nav>


    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/pharma-product-list" element={<ProductList />} />
      <Route path="/store" element={<Cart />} />
    </Routes>
  </Router>
);

export default AppRouter;