import React from 'react'

import'./main.css'

import postsData from './MainContent/postsData'

const PostImage = ({
    match,
    image = postsData.filter(post => post.title_link === match.params.postTitle)[0].image,
}) => {

    return (
        <div className="col-md-12">
            <img src={image} alt=""/>            
        </div>
    )
}

export default PostImage