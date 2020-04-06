import React,{Component} from 'react';
import { Route } from "react-router-dom"

import'./../common/style/reset.css'
import'./../common/style/base.css'

import FixedNav from './FixedNav/FixedNav'
import Header from './Header/Header'
import SliderFadeParallax from './Slider/SliderFadeParallax'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
	
	state = {
		categoryInBreadcrumb: 'travels',
	}
	
	changeBrowsingCategory = ((name) => {
        this.setState({categoryInBreadcrumb: name})
      }) 
      
  render () {

  return (
    <div>
	      <FixedNav
          changeBrowsingCategory={this.changeBrowsingCategory}
        />
        <Header
          changeBrowsingCategory={this.changeBrowsingCategory}
        />							
        <Route exact path='/'><SliderFadeParallax/></Route>
        <Main
          categoryInBreadcrumb={this.state.categoryInBreadcrumb}
          changeBrowsingCategory={this.changeBrowsingCategory}
        />       
        <Footer/>
    </div>
  )
}}

export default App
