import React from 'react'

import'./main.css'

import postsData from './MainContent/postsData'

const PostImage = () => {
    return (
        <div className="col-md-12">
            {postsData.filter(post => post.link === window.location.pathname).map((post)=>(
					<div key={post.id}>
                        <img src={post.image} alt=""/>
					</div>
				))}
            
        </div>
    )
}

export default PostImage