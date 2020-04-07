import React from "react"

import'./headerrow.css'

import ResponseMenu from './ResponseMenu/ResponseMenu'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const HeaderRow = ({
    changeBrowsingCategory
}) => {
	
	return (
        <div className="header-row">
            <div className="wrap">
                <div className="resp-menu">
                    <ResponseMenu
                    changeBrowsingCategory={changeBrowsingCategory}
                    />
                </div>                
                <div className="logo-inner">
                    <Logo/>
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

export default HeaderRow