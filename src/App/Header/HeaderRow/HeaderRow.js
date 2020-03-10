import React from "react"

import'./headerrow.css'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const HeaderRow = () => {
	
	return (
        <div className="header-row">
            <div className="wrap">
                <div className="col-md-4">
                    <Logo/>
                </div>
                <div className="col-md-auto">
                    <Menu/>						
                </div>			
            </div>
	    </div>						
	)
}

export default HeaderRow