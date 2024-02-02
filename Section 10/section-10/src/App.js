import Header from './Header.js';
import Shop from './Shop.js';
import Product from './Product.js';
import { DUMMY_PRODUCTS } from './dummyproducts.js';
import CartContextProvider from './shopping-cart-context.js';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;