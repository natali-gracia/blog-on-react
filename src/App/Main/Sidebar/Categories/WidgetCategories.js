import React from "react"

import './widgetcategories.css'

const WidgetCategories = () => {
	return (
        <div>
            <div className="categories-item">
                <a href="/">Beauty</a>
            </div>
            <div className="categories-item">
                <a href="/">Fashion</a>
            </div>
            <div className="categories-item">
                <a href="/">Travels</a>
            </div>
            <div className="categories-item">
                <a href="/">Lifestyle</a>
            </div>
        </div>
	)
}

export default WidgetCategories