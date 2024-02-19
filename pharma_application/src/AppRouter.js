import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import HomeComponent from './HomeComponent'; // Import the new component
import ProductDetailsComponent from './ProductDetailsComponent'; // Import the new component

const AppRouter = () => {
  return (
    <Router>
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
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComponent />} />
        </Route>
        <Route path="/product-details" element={<ProductDetails />}>
          <Route index element={<ProductDetailsComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;