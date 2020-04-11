import React from "react"
import PostListItem from '../MainContent/PostListItem'
import postsData, {getPostsMap} from '../MainContent/postsData'

const PostsListFavorites = ({
    sliceValue,
    changeBrowsingCategory,
    favoritesButtonState,
    addFavorites,
    removeFavorites,
    postsObj = getPostsMap(postsData),
}) => {
        return (
            <div className="flex-wrap">
                {Object.keys(favoritesButtonState).filter((postId) => 
                     favoritesButtonState[postId] === true).sort((a,b)=> b - a).slice(0,sliceValue).map((postId)=>(
                        <div key={postsObj[postId].id}>
                            <PostListItem 
                                id={postsObj[postId].id}
                                title={postsObj[postId].title}
                                date={postsObj[postId].date}
                                image={postsObj[postId].image_postitem}
                                title_link={postsObj[postId].title_link}
                                excerpt={postsObj[postId].excerpt}
                                сategories={postsObj[postId].сategories}
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

export default PostsListFavorites