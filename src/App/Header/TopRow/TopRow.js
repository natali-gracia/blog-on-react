import React from "react"

import'./toprow.css'

import SocialIcons from './SocialIcons/SocialIcons'
import Search from './Search/Search'

const TopRow = () => {
	return (
        <div className="top-row">
            <div className="wrap">
                <div className="col-md-6">
                    <SocialIcons/>
                </div>
                <div className="col-md-6">
                    <Search/>						
                </div>			
            </div>
	    </div>						
	)
}

export default TopRow