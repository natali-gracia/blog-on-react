import React from "react"
import {connect} from 'react-redux'
import PostListItem from '../MainContent/PostListItem'
import postsData, {getPostsMap} from '../MainContent/postsData'

const PostsListFavorites = ({
    sliceValue,
    changeBrowsingCategory,
    inFavorites,
    postsObj = getPostsMap(postsData),
}) => {
        return (
            <div className="flex-wrap">
                {Object.keys(inFavorites).filter((postId) => 
                     inFavorites[postId] === true).sort((a,b)=> b - a).slice(0,sliceValue).map((postId)=>(
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
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

const mapStateToProps = (state) => ({
    inFavorites:state,
})

export default connect(
    mapStateToProps,
) (PostsListFavorites)