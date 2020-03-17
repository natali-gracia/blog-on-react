import React from "react"

import './searchwidget.css'

const SearchWidget = () => {
	return (
        <div className="widget-search">
            <form action="">
                <input type="text" name="Search" placeholder="Search and hit enter..."/>
                <button type="submit"></button>
            </form>
        </div>
	)
}

export default SearchWidget