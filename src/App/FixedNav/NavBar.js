import React from "react"

import'./fixednav.css'

import LogoFix from './LogoFix/LogoFix'
import MenuFix from './MenuFix/MenuFix'

const NavBar = ({
    changeBrowsingCategory,
    showNavBar,
}) => (
    <div className={showNavBar === false ? 'fixednav' : 'fixednav  is-nav-open'}>
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