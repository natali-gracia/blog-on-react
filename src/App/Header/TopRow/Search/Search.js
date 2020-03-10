import React from "react"

import './search.css'

const Search = () => {
	return (
        <div className="search-form">
            <form action="">
                <input type="text" name="Search" placeholder="Search and hit enter..."/>
                <button type="submit"></button>
            </form>
        </div>
	)
}

export default Search