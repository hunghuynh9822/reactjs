import React, { Component } from 'react';
import './App.css';
import MainMenu from './Component/Menu/MainMenu';
import Slide1 from './Component/Slide1/Slide1';
import Banner from './Component/Banner/Banner';
import NewProduct from './Component/ShowProduct/NewProduct';

class App extends Component {
  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <MainMenu></MainMenu>
        {/* <!-- Slide1 --> */}
        <Slide1></Slide1>
        {/* <!-- Banner --> */}
        <Banner></Banner>
        {/* <!-- New Product --> */}
        <NewProduct></NewProduct>
      </div>
      
    );
  }
}

export default App;
