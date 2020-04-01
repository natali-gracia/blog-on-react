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
    category_link,
    // categoriesArray,
    // categoriesArray_1,
    changeBrowsingCategory,
    // categoriesArrayCount = Object.keys({categoriesArray}).map(() => {
    //     return (
    //     {categoriesArray}
    //     )
    // })
}) => {
        return (
            <div className="blog-items">
                <div className="top-blog">
                    <div className="blog-image">
                        <Link to={`/post/${title_link}`} title={title}>
                            <img src={image} alt=""/>
                        </Link>	
                    </div>
                    {/* <div className="blog-category">
                    {Object.keys({categoriesArray_1}).map((item,id) => {
                        return (
                        <div key={id}>
                            {item.сategory}
                        </div>
                        )
                    })}
                    </div> */}
                    {/* <div className="blog-category">
                         {Object.keys(categoriesArrayCount).map((index)=>{
                             return (
                                 index = index.value
                             )
                        })}
                    </div> */}
                    <div className="blog-category">
                        <Link to={category_link} onClick={() => changeBrowsingCategory(сategories)}>
                            {сategories}
                        </Link>								
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
    categories:PropTypes.string,
    category_link:PropTypes.string,
    categoriesArray_1:PropTypes.array,
    categoriesArray:PropTypes.array,
}

PostListItem.defaultProps = {
    excerpt:"No excerpt",
}

export default PostListItem