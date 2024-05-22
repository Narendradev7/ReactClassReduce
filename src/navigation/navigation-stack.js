import React, { createContext, useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/home-screen';
import AboutScreen from '../screens/about-screen';
import SettingScreen from '../screens/setting-screen';
import BlogScreen from '../screens/blog-screen';
import InvalidScreen from '../screens/invalid-screen';
import ProductDetail from '../screens/product-detailscreen';

export const UserInfo = createContext();
export const ThemeInfo = createContext();

const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT_ACTION":
      return { ...state, count: state.count + 1 };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}

const initialState = {
  count: 0,
  cart: []
}

function NavigationStack() {
  const [username, setUserName] = useState({
    name: "Home",
    age: 22,
    salary: 1000
  });
  const [darkMode, setDarkMode] = useState(true);
  const [count, setCount] = useState(0);
  const [currentState, dispatch] = useReducer(reducerFn, initialState);

  const handleDarkLightModes = () => {
    setDarkMode(!darkMode);
  }

  const incrementAction = () => {
    dispatch({
      type: "INCREMENT_ACTION"
    });
  }

  const incrementCounter = (value = 1) => {
    setCount(count + value);
  }

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  }

  return (
    <ThemeInfo.Provider value={{
      darkMode,
      handleDarkLightModes,
      incrementCounter,
      count,
      incrementAction,
      currentState,
      addToCart
    }}>
      <UserInfo.Provider value={username}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/settings" Component={SettingScreen} />
            <Route path="/blog" Component={BlogScreen} />
            <Route path="/:brand/:productID" Component={ProductDetail} />
            <Route path="*" Component={InvalidScreen} />
          </Routes>
        </BrowserRouter>
      </UserInfo.Provider>
    </ThemeInfo.Provider>
  )
}

export default NavigationStack;
