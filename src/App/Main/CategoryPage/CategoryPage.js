import React from "react"
// import { Route } from "react-router-dom"

import './categorypage.css'

import PostsListWithBtn from './../MainContent/PostsListWithBtn'
import PostsListCategories from './PostsListCategories'


const CategoryPage = ({
	categoryInBreadcrumb
}) => {
	return (
		<div className="category-pagerow">
			<PostsListWithBtn
			categoryInBreadcrumb={categoryInBreadcrumb}
			PostsListRelevant={PostsListCategories}
			/>
		</div>							
	)
}

export default CategoryPage