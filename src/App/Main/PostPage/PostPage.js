import React from "react"

import postsData from './../MainContent/postsData'

import BlogPost from './BlogPosts/BlogPost'

const PostPage = () => {
	return (
		<div>
			{postsData.filter(post => post.link === window.location.pathname).map((post)=>(
					<div key={post.id}>
						<BlogPost
							id={post.id}
						/>
					</div>
				))}
		</div>							
	)
}

export default PostPage
