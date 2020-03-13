import React from "react"

import'./fixednav.css'

import LogoFix from './LogoFix/LogoFix'
import MenuFix from './MenuFix/MenuFix'

const NavBar = () => {

	return (
        <div className="fixednav">
            <div className="wrap">
                <div className="col-md-4">
                    <LogoFix/>
                </div>
                <div className="col-md-auto">
                    <MenuFix/>						
                </div>			
            </div>
        </div> 					
	);
}

export default NavBar