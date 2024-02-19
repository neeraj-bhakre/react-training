import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import BookDetailsComponent from './BookDetailsComponent';
import NavigationComponent from './NavigationComponent';
import './AppRouter.css';

const AppRouter = () => {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bookdetails">Book Details</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={HomeComponent} />
          <Route path="/bookdetails" component={BookDetailsComponent} />
          <Route path="/navigation" component={NavigationComponent} />
        </div>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;