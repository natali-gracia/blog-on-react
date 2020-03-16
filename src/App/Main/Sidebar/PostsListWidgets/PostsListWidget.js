import React from "react"

import "./postlistwidgetitem.css"

import PostListWidgetItem from './PostListWidgetItem'
import postsData from './../../MainContent/postsData'


const PostsListWidget = () => {
        return (
            <div>
                {postsData.sort((a,b)=> b.id - a.id).slice(0,3).map((post)=>(
                        <div className="widget-posts" key={post.id}>
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

export default PostsListWidget