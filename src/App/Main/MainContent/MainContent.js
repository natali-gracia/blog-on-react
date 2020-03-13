import React from "react"

import'./maincontent.css'

import PostsList from './PostsList'

const MainContent = () => {	
	return (
        <div>
            <div className="posts-nav flex-wrap">
                <div className="btn-posts-nav active">
                    <a href="">Recent posts</a>
                </div>
                <div className="btn-posts-nav">
                    <a href="">Popular posts</a>
                </div>
            </div>
            <div className="posts-list">
                <PostsList/> 												
            </div>
            <button className="more-posts">Load more posts</button>
        </div> 				
	)
}

export default MainContent