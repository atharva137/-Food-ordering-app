import React, {Fragment, useState} from 'react';

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/Cart-Provider';

function App() {

  const[cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }

  function hideCartHandler(){
    setCartIsShown(false);
  }

  return (
      // <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}></Cart> }
      <Header showCart={showCartHandler} ></Header>
      <main>
      <Meals></Meals>
      </main>
       </CartProvider> 
      // </Fragment>
    
  );
}

export default App;
