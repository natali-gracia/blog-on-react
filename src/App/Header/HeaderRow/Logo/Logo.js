import React from "react"

import './logo.css'

import logo from "./logo-white.png"

const Logo = () => {
	return (
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
        </div>
	)
}

export default Logo