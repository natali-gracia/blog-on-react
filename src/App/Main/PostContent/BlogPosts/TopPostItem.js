import React from "react"
import PropTypes from "prop-types"

import './itempost.css'

const TopPostItem = ({
    title,
    date,
    сategories,
    author, 
}) => {
	return (
        <div className="wrap">           
            <div className="top-blogitem">
                <div className="blog-category">
                    <em>
                        <a href="#">{сategories}</a>
                        {/* <a href="#">Blog</a>•<a href="#">Fashion</a> */}
                    </em>								
                </div>
                <h1 className="postitem-title">{title}</h1>
                <div className="postitem-meta">
                    <span className="post-meta-time">{date}</span>
                    <a href="#" className="post-meta-author">by {author}</a>
                    <a href="#">7 Comments</a>
                </div>
            </div>
        </div>
	)
}

TopPostItem.propTypes = {
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    сategories:PropTypes.array,
}


export default TopPostItem