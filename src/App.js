import React, { Component } from 'react';
import './styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import MusixInfo from './components/musixinfo';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1500px'}}>
        <Header />  
        
        <Element name='featured'>
          <Featured />
        </Element>

        <Element name='musixinfo'>
          <MusixInfo />
        </Element>
        
        <Element name='highlights'>
          <Highlight /> 
        </Element>
        
        <Element name='pricing'>
          <Pricing />
        </Element>
        
        <Element name='location'>
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
