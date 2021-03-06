import React from "react"
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

import "./postlistitem.css"

import CommentsListLength from './../../../Components/CommentsListLength/CommentsListLength'
import commentsData from './../PostPage/CommentsList/commentsData'
import postsData, {getPostsMap} from './postsData'

const PostListItem = ({
    id,
    title,
    title_link,
    date,
    image,  
    excerpt,
    сategories,
    changeBrowsingCategory,
    postItemData = getPostsMap(postsData),
    inFavorites = false,
    addFavorites,
    removeFavorites,
}) => { 

        const CommentsArray = commentsData.filter((comment) => comment.link_relative === postItemData[id].title_link)

        return (
            <div className="blog-items">
                <div className="top-blog">
                    <div className="blog-image">
                        <Link to={`/post/${title_link}`} title={title}>
                            <img src={image} alt=""/>
                        </Link>	
                    </div>
                    <div className="blogpost-category">
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
                    <div className="blogpost-meta">
                        <span>{date}</span>
                        <em>•</em>
                        <div className="favorites-pointer">
                            <button onClick={()=>inFavorites ? removeFavorites(id) : addFavorites(id)} 
                                title={inFavorites ? 'Remove from Favorites' : 'Add to Favorites'}>
                                {inFavorites ? <em className="liked"></em> : <em className="noliked"></em>}             
                            </button>
                        </div>
                        <em>•</em>
                        <span>{CommentsArray.length !== 0 ?
                                <CommentsListLength
                                    id={id}
                                /> : 'No'} Comments</span>
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

const mapStateToProps = (state,props) => ({
    inFavorites:state[props.id],
})

const mapDispatchToProps = (dispatch) => ({
    addFavorites:(id)=>dispatch({
        type: 'FAVORITES',
        id:id,
    }),
    removeFavorites:(id)=>dispatch({
        type: 'NOFAVORITES',
        id:id,
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (PostListItem)