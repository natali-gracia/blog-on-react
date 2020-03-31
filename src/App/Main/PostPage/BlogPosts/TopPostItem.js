import React from "react"
import PropTypes from "prop-types"
import './itempost.css'

import {Link} from "react-router-dom"
import ScrollIntoView from 'react-scroll-into-view'


const TopPostItem = ({
    title,
    date,
    сategories,
    category_link,
    changeBrowsingCategory,
}) => {
	return (
        <div className="wrap">           
            <div className="top-blogitem">
                <div className="blog-category">
                    <em>
                        <Link to={category_link} onClick={() => changeBrowsingCategory(сategories)}>{сategories}</Link>
                        {/* <a href="#">Blog</a>•<a href="#">Fashion</a> */}
                    </em>								
                </div>
                <h1 className="postitem-title">{title}</h1>
                <div className="postitem-meta">
                    <span className="post-meta-time">{date}</span>
                    <ScrollIntoView selector="#comment-list" className="scroll-btn">
                        <button>7 Comments</button>
                    </ScrollIntoView>                    
                </div>
            </div>
        </div>
	)
}

TopPostItem.propTypes = {
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    categories:PropTypes.string,
}


export default TopPostItem