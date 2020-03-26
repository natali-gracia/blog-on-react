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
                    <Link to="/category/beauty" onClick={() => changeBrowsingCategory('Beauty')}>Beauty</Link>
                </li>
                <li className="dropdown-item">
                    <Link to="/category/fashion" onClick={() => changeBrowsingCategory('Fashion')}>Fashion</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('Fashion')}>News</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('Fashion')}>Trends</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('Fashion')}>Collections</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('Fashion')}>Everyday fashion</Link></li>
                    </ul>
                </li>
                <li className="dropdown-item">
                    <Link to="/category/travels" onClick={() => changeBrowsingCategory('Travels')}>Travels </Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('Travels')}>Countries</Link></li>
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('Travels')}>Active travels</Link></li>
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('Travels')}>My tops</Link></li>
                        <li><Link to="/category/travels" onClick={() => changeBrowsingCategory('Travels')}>Lifehacks</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/category/lifestyle" onClick={() => changeBrowsingCategory('Lifestyle')}>Lifestyle</Link>
                </li>				
                <li><Link to="/">About me</Link></li>
			</ul>		
        </div>
	)
}

export default Menu