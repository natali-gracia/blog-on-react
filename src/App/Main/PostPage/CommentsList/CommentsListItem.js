import React from "react"
import PropTypes from "prop-types"
import "./commentslist.css"


const CommentsListItem = ({
    author,
    avatar,
    date,
    text,
    replies,
}) => {
        return (
            <div>
                <div className="comment-item wrap">
                    <div className="comment-author">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="right-part">
                        <div className="comment-meta">
                            <span className="author-name">{author}</span>
                            <span className="comment-date">
                                {date}
                                <button>Reply</button>
                            </span>
                        </div>
                        <div className="comment-text">
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="reply">
                {replies && replies.length !== 0 ? replies.map((item,id) => {
                        return (<div key={id}>
                            <CommentsListItem {...item}
                            /> </div>)
                    }) : false}
                </div>               
            </div>
            )
    }

CommentsListItem.propTypes = {
    author:PropTypes.string.isRequired,
    avatar:PropTypes.string,
    date:PropTypes.string,
    text:PropTypes.string,
}

CommentsListItem.defaultProps = {
    text:"No text",
}

export default CommentsListItem