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
                        <div>
                            <a href="#">{сategories}</a> 
                        </div>								
                    </div>
                    <h2 className="title">
                        <Link to={link}>{title}</Link>
                    </h2>
                    <div className="post-meta">
                        <span className="post-meta-time">{date}</span>
                        <Link to={link}>{7} Comments</Link>
                        {/* <Link to={link} onClick={this.windowLocation}>{7} Comments</Link>  */}
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
    сategories:PropTypes.array,
}

PostListItem.defaultProps = {
    excerpt:"No excerpt",
}

export default PostListItem