import React from "react"

import PostsListWithBtn from './../MainContent/PostsListWithBtn'
import PostsListCategories from './PostsListCategories'


const CategoryPage = ({
	categoryInBreadcrumb,
	changeBrowsingCategory
}) => {
	return (
		<div style={{marginTop: 40}}>
			<PostsListWithBtn
			categoryInBreadcrumb={categoryInBreadcrumb}
			PostsListRelevant={PostsListCategories}
			changeBrowsingCategory={changeBrowsingCategory}
			/>
		</div>							
	)
}

export default CategoryPage