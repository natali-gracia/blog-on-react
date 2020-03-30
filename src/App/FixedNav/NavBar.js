import React from "react"

import'./fixednav.css'

import LogoFix from './LogoFix/LogoFix'
import MenuFix from './MenuFix/MenuFix'

const NavBar = ({
    changeBrowsingCategory
}) => (
    <div className="fixednav slidein-animation">
        <div className="wrap">
            <div className="col-md-4">
                <LogoFix />
            </div>
            <div className="col-md-auto">
                <MenuFix changeBrowsingCategory={changeBrowsingCategory} />
            </div>
        </div>
    </div>
)

export default NavBar