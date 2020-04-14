import React, {Component} from "react"

import'./headerrow.css'

import ResponseMenu from './ResponseMenu/ResponseMenu'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

class HeaderRow extends Component {
    
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
        <div className="header-row">
            <div className="wrap">
                <div className="resp-menu">
                    <ResponseMenu
                        respMenu={this.state.respMenu}
                        showRespMenu={this.showRespMenu}
                        changeBrowsingCategory={changeBrowsingCategory}
                    />
                </div>                
                <div className="logo-inner">
                    <Logo
                        showRespMenu={this.showRespMenu}
                    />
                </div>
                <div className="menu-inner">
                    <Menu
                        changeBrowsingCategory={changeBrowsingCategory}
                    />						
                </div>			
            </div>
	    </div>						
        )
    }
}

export default HeaderRow