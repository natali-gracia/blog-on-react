import React from "react"

import './blogpost.css'
import'./poststext.css'

import postsData, {getPostsMap} from "../../MainContent/postsData"
import commentsData from '../CommentsList/commentsData'

import TopPostItem from './TopPostItem'
import BottomPostItem from './BottomPostItem'
import RelatedPosts from '../RelatedPosts/RelatedPosts'
import CommentsList from '../CommentsList/CommentsList'
import CommentForm from '../CommentForm/CommentForm'
import PostsNav from '../PostsNav/PostsNav'
import CommentsListLength from './../../../../Components/CommentsListLength/CommentsListLength'

const BlogPost = ({
        postItemData = getPostsMap(postsData),
        changeBrowsingCategory,
        id,
        favoritesButtonState, 
        addFavorites,
        removeFavorites,     
}) => {

        const CommentsArray = commentsData.filter((comment) => comment.link_relative === postItemData[id].title_link)

        return (
            <div>
                <div className="blog-post">
                        <TopPostItem 
                                title={postItemData[id].title}
                                date={postItemData[id].date}
                                сategories={postItemData[id].сategories}
                                author={postItemData[id].author}
                                changeBrowsingCategory={changeBrowsingCategory}
                                id={postItemData[id].id}
                                CommentsArray={CommentsArray}
                        />
                        <div className="post-text"
                        dangerouslySetInnerHTML={{
                                __html:postItemData[id].post_text
                            }}
                        >
                        </div>
                        <BottomPostItem 
                                tags={postItemData[id].tags}
                                changeBrowsingCategory={changeBrowsingCategory}
                                id={postItemData[id].id}
                                inFavorites={favoritesButtonState}
                                addFavorites={addFavorites}
				removeFavorites={removeFavorites}
                        />
		</div>
                <div className="related-posts">
                        <div className="post-widget-title">
                                <h4>Related Posts</h4>
                        </div>
                        <RelatedPosts
                                id={postItemData[id].id}
                        />
                </div>
                {CommentsArray.length !== 0 ?
                        <div>
                                <div id="comment-list"></div>
                                <div className="comment-list">
                                        <div className="post-widget-title">
                                                <h4>
                                                {<CommentsListLength
                                                        id={postItemData[id].id}
                                                />} Comments</h4>
                                        </div>
                                        <CommentsList
                                                CommentsArray={CommentsArray}
                                        />  
                                </div>
                        </div>          
                : null}
                <div className="respond-form">
                        <div className="post-widget-title">
                                <h4>Leave a Comment</h4>
                        </div>
                        <CommentForm/>
                </div>
                <div className="post-nav">
                        <PostsNav
                                prev_title_link={postItemData[id+1]===undefined ? null : postItemData[id+1].title_link}
                                prev_title={postItemData[id+1]===undefined ? null : postItemData[id+1].title}
                                next_title_link={postItemData[id-1]===undefined ? null : postItemData[id-1].title_link}
                                next_title={postItemData[id-1]===undefined ? null : postItemData[id-1].title}
                        />
                </div>

            </div>           						
	    )
}

export default BlogPost