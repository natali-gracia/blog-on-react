import React from "react"

import'./footerrow.css'

import SocialIcons from './SocialIcons/SocialIcons'
import Search from './Search/Search'

const FooterRow = () => {
	return (
        <div className="footer-top">
            <div className="instagram-line">
                <InstaLine/>
            </div>
            <div className="footer-widget">
                <FooterWidget/>						
            </div>			
	    </div>						
	)
}

export default FooterRow