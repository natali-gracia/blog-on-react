import React from "react"

import'./menu.css'

const Menu = () => {
	return (
        <div>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Beauty</a></li>
                <li className="dropdown-item">
                    <a href="/">Fashion </a>
                    <ul className="dropdown-menu">
                        <li><a href="/">News</a></li>
                        <li><a href="/">Trends</a></li>
                        <li><a href="/">Collections</a></li>
                        <li><a href="/">Everyday fashion</a></li>
                    </ul>
                </li>
                <li className="dropdown-item">
                    <a href="/">Travels </a>
                    <ul className="dropdown-menu">
                        <li><a href="/">Countries</a></li>
                        <li><a href="/">Active travels</a></li>
                        <li><a href="/">My tops</a></li>
                        <li><a href="/">Lifehacks</a></li>
                    </ul>
                </li>
                <li><a href="/">Lifestyle</a></li>				
                <li><a href="/">About me</a></li>
			</ul>		
        </div>
	)
}

export default Menu