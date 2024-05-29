import React, { useContext } from 'react';
import NavBar from '../Components/Functionality/navBar/navBar';
import UseEffect1 from '../Components/Functionality/useEffect/useEffectEx1';
import { themeInfo } from '../navigation/navigation-stack';

function HomeScreen() {
  const { currentState, addToCart } = useContext(themeInfo);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const cartLength = currentState?.cart?.length || 0;

  return (
    <div>
      <NavBar />
      <h2>Product HomeScreen</h2>
      <UseEffect1 addToCart={handleAddToCart} />
      <div>
        <h3>Cart Items: {cartLength}</h3>
      </div>
    </div>
  );
}

export default HomeScreen;
