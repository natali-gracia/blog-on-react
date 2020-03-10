import React from 'react';

import'./../common/style/reset.css'
import'./../common/style/base.css'

import FixedNav from './FixedNav/FixedNav'
import Header from './Header/Header'
import Slider from './Slider/Slider'
// import Main from './Main/Main'
// import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
	      <FixedNav/>
        <Header/>
        <Slider/>
        {/* <Main/>
        <Footer/> */}
    </div>
  );
}

export default App
