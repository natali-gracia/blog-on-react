import React from "react"
import PropTypes from "prop-types"
import "./postlistitem.css"

import {Link} from "react-router-dom"

const PostListItem = ({
    title,
    date,
    image,
    link,
    excerpt,
    сategories,
    category_link,
    changeBrowsingCategory
}) => {
        return (
            <div className="blog-items">
                <div className="top-blog">
                    <div className="blog-image">
                        <Link to={link} title={title}>
                            <img src={image} alt=""/>
                        </Link>	
                    </div>
                    <div className="blog-category">
                        <Link to={category_link} onClick={() => changeBrowsingCategory(сategories)}>
                            {сategories}
                        </Link>								
                    </div>
                    <h2 className="title">
                        <Link to={link}>{title}</Link>
                    </h2>
                    <div className="post-meta">
                        <span className="post-meta-time">{date}</span>
                        <span>{7} Comments</span>
                    </div>
                </div>
                <div className="blog-content">{excerpt}</div>
            </div>
            )
    }


PostListItem.propTypes = {
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    excerpt:PropTypes.string,
    image:PropTypes.string,
    categories:PropTypes.string,
    category_link:PropTypes.string,
}

PostListItem.defaultProps = {
    excerpt:"No excerpt",
}

export default PostListItem