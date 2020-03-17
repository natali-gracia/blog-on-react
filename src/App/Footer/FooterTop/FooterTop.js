import React from "react"

import'./footertop.css'

import InstaLine from './InstaLine'
import FooterSubscr from './FooterSubscr'
import FooterSocialIcons from './FooterSocialIcons'

const FooterTop = () => {
	return (
        <div className="footer-top">
            <div className="instagram-line">
                <InstaLine/>
            </div>
            <div className="footer-widget">
                <h3>Subscribe to our Newsletter</h3>
                <FooterSubscr/>
                <div className="footer-social">
                <FooterSocialIcons/>
                </div>
            </div>			
	    </div>						
	)
}

export default FooterTop