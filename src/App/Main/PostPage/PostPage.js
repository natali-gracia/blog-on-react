import React from "react"

import postsData from './../MainContent/postsData'

import BlogPost from './BlogPosts/BlogPost'

const PostPage = ({
	match,
	changeBrowsingCategory
}) => {
    // const postLink = match.params.postTitle;

	return (
		<div>
			{postsData.filter(post => (`/post/${post.title_link}`) === window.location.pathname).map((post)=>(
					<div key={post.id}>
						<BlogPost
							id={post.id}
							changeBrowsingCategory={changeBrowsingCategory}
						/>
					</div>
				))}
		</div>							
	)
}

export default PostPage
