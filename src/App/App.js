import React from 'react';
import { Route } from "react-router-dom"

import'./../common/style/reset.css'
import'./../common/style/base.css'

import FixedNav from './FixedNav/FixedNav'
import Header from './Header/Header'
import SliderFade from './Slider/SliderFade'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
	      <FixedNav/>
        <Header/>							
        <Route exact path='/'><SliderFade/></Route>
        <Main/>       
        <Footer/>
    </div>
  );
}

export default App
