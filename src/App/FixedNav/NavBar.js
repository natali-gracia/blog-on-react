import React from "react"

import'./fixednav.css'

import LogoFix from './LogoFix/LogoFix'
import Menu from './../Header/HeaderRow/Menu/Menu'

const NavBar = ({
    changeBrowsingCategory,
    favoritesButtonState,
    showNavBar,
}) => (
    <div className={showNavBar === false ? 'fixednav' : 'fixednav  is-nav-open'}>
        <div className="wrap">
            <div className="col-md-4">
                <LogoFix />
            </div>
            <div className="col-md-auto">
                <Menu 
                    changeBrowsingCategory={changeBrowsingCategory}
                    favoritesButtonState={favoritesButtonState}
                    menuClass={"menu items-fixedmenu"}
                    dropdownClass={"dropdown-item dropdown-fixedmenu"}
                    menuRow={''}
                />
            </div>
        </div>
    </div>
)

export default NavBar