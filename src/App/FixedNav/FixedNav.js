import React from "react"

import'./fixednav.css'

import LogoFix from './LogoFix/LogoFix'
import MenuFix from './MenuFix/MenuFix'

const FixedNav = () => {
	
	return (
        <div className="fixednav" id="fixnav">
            <div className="wrap">
                <div className="col-md-4">
                    <LogoFix/>
                </div>
                <div className="col-md-auto">
                    <MenuFix/>						
                </div>			
            </div>
	    </div>						
	)
}

export default FixedNav