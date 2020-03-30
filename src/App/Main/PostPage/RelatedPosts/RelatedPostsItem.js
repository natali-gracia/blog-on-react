import React from "react"
import PropTypes from "prop-types"

import './relatedposts.css'

import {Link} from "react-router-dom"

const RelatedPostsItem = ({
        title,
        date,
        link,
        image,
}) => {
	return (
        <div className="related-items">
                <Link to={link} title={title}>
                        <img src={image} alt=""/>
                </Link>		
                <h2 className="postrel-title">
                        <Link to={link}>
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
        link:PropTypes.string,
}
    

export default RelatedPostsItem