import React from "react"

import "./main.css"

const BreadCrumb = ({
    categoryInBreadcrumb
}) => {
        return (
            <div className='breadcrumb'>
                <div className='browzing'>
                    Browsing Category
               </div>
               <span>{categoryInBreadcrumb}</span>
            </div>						
	    )
}

export default BreadCrumb