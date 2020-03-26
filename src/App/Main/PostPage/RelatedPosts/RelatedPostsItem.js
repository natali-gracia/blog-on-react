import React from "react"

import './relatedposts.css'

const RelatedPostsItem = ({
        title,
        date,
        link,
        image,
}) => {
	return (
        <div className="related-items">
                <a href={link} title={title}>
                        <img src={image} alt=""/>
                </a>	
                <h2 className="postrel-title">
                        <a href={link}>{title}</a>
                </h2>
                <div className="postrel-meta">
                        <a href="#">{date}</a>
                </div>
        </div>								
	)
}

export default RelatedPostsItem