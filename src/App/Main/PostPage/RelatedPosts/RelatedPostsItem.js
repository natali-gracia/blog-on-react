import React from "react"
import PropTypes from "prop-types"

import './relatedposts.css'

import {Link} from "react-router-dom"

const RelatedPostsItem = ({
        id,
        title,
        date,
        title_link,
        image,
        LastRelatedPostsId,
}) => {
	return (
        <div className={id === LastRelatedPostsId ? 'related-items last-item' : 'related-items'}>
                <Link to={`/post/${title_link}`} title={title}>
                        <img src={image} alt=""/>
                </Link>		
                <h2 className="postrel-title">
                        <Link to={`/post/${title_link}`}>
                            {title}
                        </Link>	
                </h2>
                <div className="postrel-meta">
                        {date}
                </div>
        </div>								
	)
}

RelatedPostsItem.propTypes = {
        title:PropTypes.string.isRequired,
        date:PropTypes.string.isRequired,
        image:PropTypes.string,
        title_link:PropTypes.string,
}
    

export default RelatedPostsItem