import React from "react"

import TopRow from './TopRow/TopRow'
import HeaderRow from './HeaderRow/HeaderRow'


const Header = ({
	changeBrowsingCategory,
	favoritesButtonState,
}) => {	
	return (
		<header>
			<TopRow/>
            <HeaderRow
			changeBrowsingCategory={changeBrowsingCategory}
			favoritesButtonState={favoritesButtonState}
			/>
		</header>						
	)
}

export default Header