import React from "react"

import './logofix.css'

import logo from "./logo.png"

const LogoFix = () => {
	return (
        <div className="logo-fixednav">
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
        </div>
	)
}

export default LogoFix