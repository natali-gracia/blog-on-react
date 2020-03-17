import React from "react"

import'./footerrow.css'

const FooterRow = () => {
	return (
        <div className="wrap footer-row">
            <div className="col-md-10 lower-footer">
                <div className="col-md-5 left-footer-content">© 2020 copyright // All rights reserved</div>
				<div className="col-md-5 right-footer-content">Created by 
					<strong>
						<a href="/">NataliaSmalii</a>
					</strong>
				</div>                						
            </div>			
	    </div>						
	)
}

export default FooterRow