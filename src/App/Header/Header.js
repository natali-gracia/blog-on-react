import React from "react"

import TopRow from './TopRow/TopRow'
import HeaderRow from './HeaderRow/HeaderRow'


const Header = ({
	changeBrowsingCategory,
}) => {	
	return (
		<header>
			<TopRow/>
            <HeaderRow
			changeBrowsingCategory={changeBrowsingCategory}
			/>
		</header>						
	)
}

export default Header