import React from "react"
import PropTypes from "prop-types"
import './itempost.css'

import {Link} from "react-router-dom"
import ScrollIntoView from 'react-scroll-into-view'


const TopPostItem = ({
    title,
    date,
    сategories,
    changeBrowsingCategory,
}) => {
	return (
        <div className="wrap">           
            <div className="top-blogitem">
                <div className="blog-category">
                        {сategories.map((category,i,arr)=>(
                            <span keys={i}>
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