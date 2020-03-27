import React from "react"
import { Route } from "react-router-dom"

import BlogPostId10 from './BlogPosts/BlogPostId10'


const PostPage = () => {
	return (
		<div>
			<Route path='/post/enjoy-the-winter-time-in-the-city'>
				<BlogPostId10/>
			</Route>
			<Route path='/post/beautiful-christmas-decoration'>
				Beautiful christmas decoration
			</Route>
		</div>							
	)
}

export default PostPage
