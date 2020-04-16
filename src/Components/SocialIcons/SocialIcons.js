import React from "react"

import {Link} from "react-router-dom"

import './socialicons.css'

const SocialIcons = ({
    socialIconClass="top-social-icons",
}) => {
	return (
        <div className={socialIconClass}>
            <Link to="/" title="Facebook" className="fb-icon"></Link>            
            <Link to="/" title="YouTube" className="youtube-icon"></Link>
            <Link to="/" title="Instagram" className="insta-icon"></Link>
            <Link to="/" title="Pinterest" className="pint-icon"></Link>
        </div>
	)
}

export default SocialIcons