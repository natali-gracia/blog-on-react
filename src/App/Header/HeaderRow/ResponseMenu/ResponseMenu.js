import React, {Component} from "react"

import'./responsemenu.css'

import {Link} from "react-router-dom"

class ResponseMenu extends Component {
    
    state = {
        respMenu: false,
        }

    showRespMenu = () => {
        this.setState((prevState)=>{
            return{
                respMenu: !prevState.respMenu
            }
        })
    }

    render() {

        const {
            changeBrowsingCategory,
        } = this.props

	    return (
            <div>
                <div className="resp-menu-btn">
                    <button className="menu-icon" onClick={this.showRespMenu}></button>
                </div>
                <div className={this.state.respMenu === false ? 'resp-menu-dropdown' : 'resp-menu-dropdown  is-menu-open'}>
                    <div>
                        <Link to="/" onClick={this.showRespMenu}>Home</Link>
                        <Link to="/category/beauty" 
                            onClick={() => {
                                changeBrowsingCategory('beauty'); 
                                this.showRespMenu()
                                }}>
                                    Beauty
                        </Link>
                        <Link to="/category/fashion" 
                            onClick={() => {
                                changeBrowsingCategory('fashion');
                                this.showRespMenu()
                                }}>
                                    Fashion
                        </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('fashion');
                                    this.showRespMenu()
                                    }}>
                                        News
                            </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('fashion');
                                    this.showRespMenu()
                                    }}>
                                        Trends
                            </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('fashion');
                                    this.showRespMenu()
                                    }}>
                                        Collections
                            </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('fashion');
                                    this.showRespMenu()
                                    }}>
                                        Everyday fashion
                            </Link>
                        <Link to="/category/travels" 
                            onClick={() => {
                                changeBrowsingCategory('travels');
                                this.showRespMenu()
                                }}>
                                    Travels
                        </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('travels');
                                    this.showRespMenu()
                                    }}>
                                        Countries
                            </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('travels');
                                    this.showRespMenu()
                                    }}>
                                        Active travels
                            </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('travels');
                                    this.showRespMenu()
                                    }}>
                                        My tops
                            </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {
                                    changeBrowsingCategory('travels');
                                    this.showRespMenu()
                                    }}>
                                        Lifehacks
                            </Link>
                        <Link to="/category/lifestyle" 
                            onClick={() => {
                                changeBrowsingCategory('lifestyle');
                                this.showRespMenu()
                                }}>
                                    Lifestyle
                        </Link>
                        <Link to="/about/" onClick={this.showRespMenu}>About me</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResponseMenu