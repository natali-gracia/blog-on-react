import React from "react"

import "./postlistwidgetitem.css"

import PostListWidgetItem from './PostListWidgetItem'
import postsData from './../../MainContent/postsData'


const PostsListWidgetPopular = () => {
        return (
            <div>
                {postsData.sort((a,b)=> b.likes - a.likes)
                .slice(0,4).map((post)=>(
                        <div className="widget-posts" key={post.id}>
                            <PostListWidgetItem
                                title={post.title}
                                date={post.date}
                                image={post.image_sidebar}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsListWidgetPopular