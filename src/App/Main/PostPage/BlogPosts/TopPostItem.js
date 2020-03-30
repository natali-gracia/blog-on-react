import React from "react"
import PropTypes from "prop-types"
import './itempost.css'

import {Link} from "react-router-dom"
import ScrollIntoView from 'react-scroll-into-view'

// import CommentsList from './../CommentsList/CommentsList'


const TopPostItem = ({
    title,
    date,
    сategories,
    category_link,
    author, 
    changeBrowsingCategory,
    commentPlace,
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
    сategories:PropTypes.array,
}


export default TopPostItem