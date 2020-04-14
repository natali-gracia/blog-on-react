import React from "react"
import {connect} from 'react-redux'

import'./menu.css'

import {Link} from "react-router-dom"

const Menu = ({
    changeBrowsingCategory,
    inFavorites,
    menuRow = "menu-row",
    menuClass = "menu",
    dropdownClass = "dropdown-item",
}) => {
	return (
        <div className={menuRow}>
            <ul className={menuClass}>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/category/beauty" onClick={() => changeBrowsingCategory('beauty')}>Beauty</Link>
                </li>
                <li className={dropdownClass}>
                    <Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Fashion</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>News</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Trends</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Collections</Link></li>
                        <li><Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Everyday fashion</Link></li>
                    </ul>
                </li>
                <li className={dropdownClass}>
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
                <li><Link to="/about/">About me</Link></li>
                <li>
                    <Link to="/favorites/" onClick={() => changeBrowsingCategory('favorites')}>
                        Favorites
                        <span className="fav-count">
                            {(Object.keys(inFavorites).filter((postId) => inFavorites[postId] === true)).length}
                        </span>
                    </Link>
                </li>
			</ul>		
        </div>
	)
}

const mapStateToProps = (state) => ({
    inFavorites:state,
})

export default connect(
    mapStateToProps,
) (Menu)