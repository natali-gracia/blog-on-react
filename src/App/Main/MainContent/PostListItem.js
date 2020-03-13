import React from "react"
import PropTypes from "prop-types"
import "./postlistitem.css"

const PostListItem = ({
    title,
    date,
    image,
    excerpt,
    сategory1,
    сategory2,
    сategory3max,
}) => {
        return (
            <div className="blog-items">
                <div className="top-blog">
                    <div className="blog-image">
                        <a href="#" title={title}>
                            <img src={image} alt=""/>
                        </a>	
                    </div>
                    <div className="blog-category">
                        <div>
                            <a href="#">{сategory1}</a>
                            <a href="#">{сategory2}</a>
                            <a href="#">{сategory3max}</a> 
                        </div>								
                    </div>
                    <h2 className="title">
                        <a href="#">{title}</a>
                    </h2>
                    <div className="post-meta">
                        <a href="#" className="post-meta-time">{date}</a>
                        <a href="#">{7} Comments</a>
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
    сategory1:PropTypes.string.isRequired,
    сategory2:PropTypes.string,
    сategory3:PropTypes.string,
}

PostListItem.defaultProps = {
    excerpt:"No excerpt",
}

export default PostListItem