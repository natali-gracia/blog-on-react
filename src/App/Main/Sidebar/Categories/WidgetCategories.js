import React from "react"

import './widgetcategories.css'

import {Link} from "react-router-dom"

const WidgetCategories = ({
    changeBrowsingCategory
}) => {
	return (
        <div>
            <div className="categories-item">
                <Link to="/category/beauty" onClick={() => changeBrowsingCategory('beauty')}>Beauty</Link>
            </div>
            <div className="categories-item">
                <Link to="/category/fashion" onClick={() => changeBrowsingCategory('fashion')}>Fashion</Link>
            </div>
            <div className="categories-item">
                <Link to="/category/travels" onClick={() => changeBrowsingCategory('travels')}>Travels</Link>
            </div>
            <div className="categories-item">
                <Link to="/category/lifestyle" onClick={() => changeBrowsingCategory('lifestyle')}>Lifestyle</Link>
            </div>
        </div>
	)
}

export default WidgetCategories