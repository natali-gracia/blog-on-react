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

const BlogPost = ({
        postItemData = getPostsMap(postsData),
        changeBrowsingCategory,
        id,      
        // repliesLength = commentsData.filter(post => post.replies.length !== 0),
        // repliesLengthTwo = repliesLength.filter(post => post.replies.length !== 0),
}) => {
        return (
            <div>
                <div className="blog-post">
                        <TopPostItem 
                                title={postItemData[id].title}
                                date={postItemData[id].date}
                                сategories={postItemData[id].сategories}
                                category_link={postItemData[id].category_link}
                                author={postItemData[id].author}
                                changeBrowsingCategory={changeBrowsingCategory}
                        />
                        <div className="post-text"
                        dangerouslySetInnerHTML={{
                                __html:postItemData[id].post_text
                            }}
                        >
                        </div>
                        <BottomPostItem 
                                tags={postItemData[id].tags}
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
                {commentsData && commentsData.length !== 0 ?
                        <div>
                                <div id="comment-list"></div>
                                <div className="comment-list">
                                        <div className="post-widget-title">
                                                <h4>{commentsData.length} Comments</h4>
                                        </div>
                                        <CommentsList/>  
                                </div>
                        </div>          
                : null}
                <div>
                        <CommentForm/>
                </div>
                <div className="post-nav">
                        <PostsNav/>
                </div>

            </div>           						
	    )
}

export default BlogPost