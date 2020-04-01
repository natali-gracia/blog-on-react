import React from 'react'

import'./main.css'

import postsData from './MainContent/postsData'

const PostImage = ({
    match,
}) => {
    const linkTitle = postsData.filter(post => post.title_link === match.params.postTitle)

    return (
        <div className="col-md-12">
            <img src={linkTitle[0].image} alt=""/>            
        </div>
    )
}

export default PostImage