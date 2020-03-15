import React from "react"

import "./postlistwidgetitem.css"

import PostListWidgetItem from './PostListWidgetItem'
import postsData from './../../MainContent/postsData'


const PostsListWidgetPopular = () => {
        return (
            <div>
                {postsData.sort((a,b)=> b.likes - a.likes)
                .slice(0,3).map((post)=>(
                        <div className="widget-posts">
                            <PostListWidgetItem
                                title={post.title}
                                date={post.date}
                                imagesmall={post.imagesmall}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsListWidgetPopular