import React from "react"

import'./menu.css'

import {Link} from "react-router-dom"

const Menu = ({
    changeBrowsingCategory
}) => {
	return (
        <div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/category/beauty" onClick={() => changeBrowsingCategory('beauty')}>Beauty</Link>
                </li>
                <li className="dropdown-item">
                    <Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Fashion</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>News</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Trends</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Collections</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Everyday fashion</Link></li>
                    </ul>
                </li>
                <li className="dropdown-item">
                    <Link to="/category/travels" onClick={() => changeBrowsingCategory('travels')}>Travels </Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('travels')}>Countries</Link></li>
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('travels')}>Active travels</Link></li>
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('travels')}>My tops</Link></li>
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('travels')}>Lifehacks</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/category/lifestyle" onClick={() => changeBrowsingCategory('lifestyle')}>Lifestyle</Link>
                </li>				
                <li><Link to="/">About me</Link></li>
			</ul>		
        </div>
	)
}

export default Menu