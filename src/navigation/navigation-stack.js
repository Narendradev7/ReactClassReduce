import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/home-screen';
import AboutScreen from '../screens/about-screen';
import SettingScreen from '../screens/setting-screen';
import BlogScreen from '../screens/blog-screen';
import InvalidScreen from '../screens/invalid-screen';
import ProductDetail from '../screens/product-detailscreen';

function NavigationStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomeScreen} />
        <Route path='/about' Component={AboutScreen} />
        <Route path='/setting' Component={SettingScreen} />
        <Route path='/blog' Component={BlogScreen} />
        <Route path='/:products/:productID' Component={ProductDetail} />

        <Route path='*' Component={InvalidScreen} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavigationStack;
