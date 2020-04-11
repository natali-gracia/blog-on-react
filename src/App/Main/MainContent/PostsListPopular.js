import React from "react"
import PostListItem from './PostListItem'
import postsData from './postsData'


const PostsListPopular = ({
    sliceValue,
    changeBrowsingCategory,
    favoritesButtonState,
    addFavorites,
    removeFavorites,
}) => {
        return (
            <div className="flex-wrap">
                {postsData.sort((a,b)=> b.likes - a.likes).slice(0,sliceValue).map((post)=>(
                        <div key={post.id}>
                            <PostListItem 
                                id={post.id}
                                title={post.title}
                                date={post.date}
                                image={post.image_postitem}
                                title_link={post.title_link}
                                excerpt={post.excerpt}
                                сategories={post.сategories}
                                changeBrowsingCategory={changeBrowsingCategory}
                                inFavorites={favoritesButtonState}
                                addFavorites={addFavorites}
                                removeFavorites={removeFavorites}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsListPopular