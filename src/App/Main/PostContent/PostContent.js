import React from "react"
import { Route } from "react-router-dom"

import BlogPostId10 from './BlogPosts/BlogPostId10'


const PostContent = () => {
	return (
		<div>
			<Route path='/enjoy-the-winter-time-in-the-city'>
				<BlogPostId10/>
			</Route>
		</div>							
	)
}

export default PostContent
