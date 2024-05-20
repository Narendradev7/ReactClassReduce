import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/home-screen';
import AboutScreen from '../screens/about-screen';
import SettingScreen from '../screens/setting-screen';
import BlogScreen from '../screens/blog-screen';
import InvalidScreen from '../screens/invalid-screen';
import ProductScreen from '../screens/product-screen';

function NavigationStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/setting' element={<SettingScreen />} />
        <Route path='/blog' element={<BlogScreen />} />
        <Route path='/products/:productId' element={<ProductScreen />} />
        <Route path='*' element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavigationStack;
