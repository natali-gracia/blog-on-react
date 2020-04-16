import React from "react"

import {Link} from "react-router-dom"

import './../../Header/TopRow/SocialIcons/socialicons.css'

const FooterSocialIcons = () => {
	return (
        <div className="footer-social-icons">
            <Link to="/" title="Facebook" className="fb-icon"></Link>            
            <Link to="/" title="YouTube" className="youtube-icon"></Link>
            <Link to="/" title="Instagram" className="insta-icon"></Link>
            <Link to="/" title="Pinterest" className="pint-icon"></Link>
        </div>
	)
}

export default FooterSocialIcons