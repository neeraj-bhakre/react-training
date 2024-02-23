import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import BookDetailsComponent from './BookDetailsComponent';
import BookStore from './BookStore'; // Ensure that 'BookStore' is only imported once
import './AppRouter.css';
import Cart from './Cart';
const AppRouter = () => {
  return (
    <Router>
        <h1>Book Store</h1>
      <nav>
        
        <Link to="/">Home</Link>
        <Link to="/book">Book Details</Link>
        <Link to="/Cart">Cart</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/book" element={<BookDetailsComponent />} />
        <Route path="/store" element={<BookStore />} /> 
        <Route path="/Cart" element={<Cart />} /> 
      </Routes>
    </Router>
  );
}

export default AppRouter;