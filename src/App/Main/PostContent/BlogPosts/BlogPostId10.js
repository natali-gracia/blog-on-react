import React from "react"

import './blogpost.css'

import postsData, {getPostsMap} from "../../MainContent/postsData"
import commentsData from './../CommentsList/commentsData'

import TopPostItem from './TopPostItem'
import PostTextId10 from "./../PostsText/PostTextId10"
import BottomPostItem from './BottomPostItem'
import RelatedPosts from './../RelatedPosts/RelatedPosts'
import CommentsList from './../CommentsList/CommentsList'
import CommentForm from './../CommentForm/CommentForm'
import PostsNav from './../PostsNav/PostsNav'

const BlogPostId10 = ({
        postItemData = getPostsMap(postsData),           
}) => {
        return (
            <div>
                <div className="blog-post">
                        <TopPostItem 
                                title={postItemData[10].title}
                                date={postItemData[10].date}
                                сategories={postItemData[10].сategories}
                                author={postItemData[10].author}
                        />
                        <PostTextId10/>
                        <BottomPostItem 
                                tags={postItemData[10].tags}
                        />
		</div>
                <div className="related-posts">
                        <div className="post-widget-title">
                                <h4>Related Posts</h4>
                        </div>
                        <RelatedPosts
                                id={postItemData[10].id}
                        />
                </div>
                {commentsData && commentsData.length !== 0 ? 
                        <div className="comment-list">
                                <div className="post-widget-title">
                                        <h4>{commentsData.length} Comments</h4>
                                </div>
                                <CommentsList/>  
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

export default BlogPostId10