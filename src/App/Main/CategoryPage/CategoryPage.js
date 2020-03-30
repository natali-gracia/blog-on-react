import React from "react"

import './categorypage.css'

import PostsListWithBtn from './../MainContent/PostsListWithBtn'
import PostsListCategories from './PostsListCategories'


const CategoryPage = ({
	categoryInBreadcrumb,
	changeBrowsingCategory
}) => {
	return (
		<div className="category-pagerow">
			<PostsListWithBtn
			categoryInBreadcrumb={categoryInBreadcrumb}
			PostsListRelevant={PostsListCategories}
			changeBrowsingCategory={changeBrowsingCategory}
			/>
		</div>							
	)
}

export default CategoryPage