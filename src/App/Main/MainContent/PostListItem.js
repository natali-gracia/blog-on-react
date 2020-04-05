import React from "react"
import PropTypes from "prop-types"
import "./postlistitem.css"


import {Link} from "react-router-dom"

const PostListItem = ({
    title,
    title_link,
    date,
    image,  
    excerpt,
    сategories,
    changeBrowsingCategory,
}) => {

        return (
            <div className="blog-items">
                <div className="top-blog">
                    <div className="blog-image">
                        <Link to={`/post/${title_link}`} title={title}>
                            <img src={image} alt=""/>
                        </Link>	
                    </div>
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
                    <h2 className="title">
                        <Link to={`/post/${title_link}`}>{title}</Link>
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
    title_link:PropTypes.string,
    date:PropTypes.string.isRequired,
    excerpt:PropTypes.string,
    image:PropTypes.string,
    categories:PropTypes.array,
}

PostListItem.defaultProps = {
    excerpt:"No excerpt",
}

export default PostListItem