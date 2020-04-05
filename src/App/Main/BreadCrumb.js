import React from "react"

import "./main.css"

const BreadCrumb = ({
    categoryInBreadcrumb,
    classForFilterTitle = 'breadcrumb',
    browsingItem = 'Category'
}) => {
        return (
            <div className={classForFilterTitle}>
                <div className='browzing'>
                    Browsing {browsingItem}
               </div>
               <span>{categoryInBreadcrumb}</span>
            </div>						
	    )
}

export default BreadCrumb