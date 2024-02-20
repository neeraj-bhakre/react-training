import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import BookDetailsComponent from './BookDetailsComponent';
import BookStore from './BookStore';
import './AppRouter.css';
const AppRouter = () => {
  return (
    <Router>
        <h1>Book Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/book">Book Details</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/book" element={<BookDetailsComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;