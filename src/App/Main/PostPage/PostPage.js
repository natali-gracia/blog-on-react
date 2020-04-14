import React from "react"

import postsData from './../MainContent/postsData'

import BlogPost from './BlogPosts/BlogPost'

const PostPage = ({
	match,
	changeBrowsingCategory,
}) => {

	const linkTitle = postsData.filter(post => post.title_link === match.params.postTitle)


	return (
		<div>
			<BlogPost
				id={linkTitle[0].id}
				changeBrowsingCategory={changeBrowsingCategory}
			/>
		</div>							
	)
}

export default PostPage