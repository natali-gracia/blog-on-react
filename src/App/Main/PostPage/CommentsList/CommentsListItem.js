import React,{Component} from "react"
import PropTypes from "prop-types"
import "./commentslist.css"

import CommentForm from './../CommentForm/CommentForm'

class CommentsListItem extends Component {

    state = {
        replyRow: false,
    }

    showReplyRow = () => {
        this.setState((prevState)=>{
            return{
                replyRow: !prevState.replyRow
            }
        })
    }


    render() {
        const {
    id,
    author,
    avatar,
    date,
    text,
    replies,
    lastCommentId
    } = this.props;
    
        return (
            <div>
                <div className={id === lastCommentId ? 'last-comment-item wrap' : 'comment-item wrap'}>
                    <div className="comment-author">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="right-part">
                        <div className="comment-meta">
                            <span className="author-name">{author}</span>
                            <span className="comment-date">
                                {date}
                                <button onClick={this.showReplyRow}>Reply</button>
                            </span>
                        </div>
                        <div className="comment-text">
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>
                    <div className={this.state.replyRow === false ? 'reply-row' : 'reply-row is-reply-open'}>
                        <div className="top-line">                          
                            <button className='cancel-reply-btn' onClick={this.showReplyRow}>Cancel reply</button>
                            <CommentForm/>
                        </div>
                    </div>
                </div>
                <div className='reply'>
                {replies && replies.length !== 0 ? replies.map((item,id) => {
                        return (<div key={id}>
                            <CommentsListItem {...item}
                            /> </div>)
                    }) : false}
                </div>                              
            </div>
        )
    }

}

CommentsListItem.propTypes = {
    author:PropTypes.string,
    avatar:PropTypes.string,
    date:PropTypes.string,
    text:PropTypes.string,
}

CommentsListItem.defaultProps = {
    text:"No text",
}

export default CommentsListItem