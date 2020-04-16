import React from "react"

import {Link} from "react-router-dom"

import'./footerrow.css'

const FooterRow = () => {
	return (
        <div className="wrap footer-row">
            <div className="col-md-10 lower-footer">
                <div className="col-md-6 left-footer-content">© 2020 copyright // All rights reserved</div>
				<div className="col-md-6 right-footer-content">Created by 
					<strong>
						<Link to="/"> NataliaSmalii</Link>
					</strong>
				</div>                						
            </div>			
	    </div>						
	)
}

export default FooterRow