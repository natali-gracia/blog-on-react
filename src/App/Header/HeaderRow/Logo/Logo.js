import React from "react"

import './logo.css'
import {Link} from "react-router-dom"

import logo from "./logo-white.png"

const Logo = () => {
	return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
        </div>
	)
}

export default Logo