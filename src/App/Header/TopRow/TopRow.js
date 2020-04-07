import React from "react"

import'./toprow.css'

import SocialIcons from './SocialIcons/SocialIcons'
import Search from './Search/Search'

const TopRow = () => {
	return (
        <div className="top-row">
            <div className="wrap">
                <div className="top-left">
                    <SocialIcons/>
                </div>
                <div className="top-right">
                    <Search/>						
                </div>			
            </div>
	    </div>						
	)
}

export default TopRow