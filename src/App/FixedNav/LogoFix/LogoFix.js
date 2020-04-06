import React from "react"

import './logofix.css'
import {Link} from "react-router-dom"

import logo from "./logo.png"

const LogoFix = () => {
	return (
        <div className="logo-fixednav">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
        </div>
	)
}

export default LogoFix