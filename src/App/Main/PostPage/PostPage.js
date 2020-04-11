import React from "react"

import postsData from './../MainContent/postsData'

import BlogPost from './BlogPosts/BlogPost'

const PostPage = ({
	match,
	changeBrowsingCategory,
	favoritesButtonState,
	addFavorites,
	removeFavorites,
}) => {

	const linkTitle = postsData.filter(post => post.title_link === match.params.postTitle)


	return (
		<div>
			<BlogPost
				id={linkTitle[0].id}
				changeBrowsingCategory={changeBrowsingCategory}
				favoritesButtonState={favoritesButtonState}
				addFavorites={addFavorites}
				removeFavorites={removeFavorites}
			/>
		</div>							
	)
}

export default PostPage