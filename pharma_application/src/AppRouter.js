// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import HomeComponent from './HomeComponent';
import ProductDetailsComponent from './ProductDetailsComponent';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product-details">Product Details</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-component" element={<HomeComponent />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-details-component" element={<ProductDetailsComponent />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;