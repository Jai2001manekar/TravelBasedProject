


import React from 'react';
import  './App.css'
import Header from './Compent/Header';
import Searchbar from './Compent/Searchbar';
import Hero from './Compent/Hero';
import Discover from './Compent/Discover';
import FeatureListing from './Compent/FeatureListing';
import Footer from './Compent/Footer';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Searchbar/>
      <Hero/>
      <Discover/>
      <FeatureListing/>
      <Footer/>
    </div>
  );
};

export default App;