import React from "react"
import PropTypes from "prop-types"
import './itempost.css'

import {Link} from "react-router-dom"
import ScrollIntoView from 'react-scroll-into-view'
import CommentsListLength from './../../../../Components/CommentsListLength/CommentsListLength'

const TopPostItem = ({
    title,
    date,
    сategories,
    changeBrowsingCategory,
    CommentsArray,
    id,
}) => {

	return (
        <div className="wrap">           
            <div className="top-blogitem">
                <div className="blog-category">
                        {сategories.map((category,i,arr)=>( 
                            <span key={i}>
                                <Link to={`/category/${category}`} onClick={() => changeBrowsingCategory(category)}>
                                    {category}
                                </Link> 
                                {i !== (arr.length-1) ? 
                                <em>•</em>
                                : ''}
                            </span>
                            ))
                        }
                </div>
                <h1 className="postitem-title">{title}</h1>
                <div className="postitem-meta">
                    <span className="post-meta-time">{date}</span>
                    <ScrollIntoView selector="#comment-list" className="scroll-btn">
                    <button>{CommentsArray.length !== 0 ?
                                <CommentsListLength
                                    id={id}
                                /> : 'No'} Comments</button>
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