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
    favoritesButtonState: {
		}
	}
	
	changeBrowsingCategory = ((name) => {
        this.setState({categoryInBreadcrumb: name})
      }) 
  
  addFavorites = ((postId) => {
    this.setState((prevState)=>({
      favoritesButtonState: {
      ...prevState.favoritesButtonState,
      [postId]: true,
        }}))
    })

  removeFavorites = ((postId) => {
      this.setState((prevState)=>({
        favoritesButtonState: {
        ...prevState.favoritesButtonState,
        [postId]: false,
          }}))
      })
      
  render () {

  return (
    <div>
	      <FixedNav
          changeBrowsingCategory={this.changeBrowsingCategory}
          favoritesButtonState={this.state.favoritesButtonState}
        />
        <Header
          changeBrowsingCategory={this.changeBrowsingCategory}
          favoritesButtonState={this.state.favoritesButtonState}
        />		
        <Route exact path='/'><SliderFadeParallax/></Route>
        <Main
          categoryInBreadcrumb={this.state.categoryInBreadcrumb}
          changeBrowsingCategory={this.changeBrowsingCategory}
          favoritesButtonState={this.state.favoritesButtonState}
          addFavorites={this.addFavorites}
          removeFavorites={this.removeFavorites}
        />       
        <Footer/>
    </div>
  )
}}

export default App
