// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import AppRouter from './AppRouter';
//import BookStore from './BookStore';
//import BookList from './BookList';
//import Cart from './Cart';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
     
      {/* <BookList />
      <Cart /> */}
    </Provider>
  );
}

export default App;