import React from 'react';

import'./../common/style/reset.css'
import'./../common/style/base.css'

import FixedNav from './FixedNav/FixedNav'
import Header from './Header/Header'
import SliderFade from './Slider/SliderFade'
import Main from './Main/Main'
// import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
	      <FixedNav/>
        <Header/>
        <SliderFade/>
        <Main/>
        {/* 
        <Footer/> */}
    </div>
  );
}

export default App
