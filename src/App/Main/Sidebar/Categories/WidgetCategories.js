import React from "react"

import './widgetcategories.css'

import {Link} from "react-router-dom"

const WidgetCategories = ({
    changeBrowsingCategory
}) => {
	return (
        <div>
            <div className="categories-item">
                <Link to="/category/beauty" onClick={() => changeBrowsingCategory('Beauty')}>Beauty</Link>
            </div>
            <div className="categories-item">
                <Link to="/category/fashion" onClick={() => changeBrowsingCategory('Fashion')}>Fashion</Link>
            </div>
            <div className="categories-item">
                <Link to="/category/travels" onClick={() => changeBrowsingCategory('Travels')}>Travels</Link>
            </div>
            <div className="categories-item">
                <Link to="/category/lifestyle" onClick={() => changeBrowsingCategory('Lifestyle')}>Lifestyle</Link>
            </div>
        </div>
	)
}

export default WidgetCategories