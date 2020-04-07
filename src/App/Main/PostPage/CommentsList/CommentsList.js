import React from "react"

import CommentsListItem from './CommentsListItem'

const CommentsList = ({
    CommentsArray
}) => {

        const lastCommentId = CommentsArray[CommentsArray.length-1].id

        return (
            <div>
                {CommentsArray.map((comment, id)=>(
                        <div key={id}>
                            <CommentsListItem                            
                                author={comment.author}
                                avatar={comment.avatar}
                                date={comment.date}
                                link={comment.link}
                                text={comment.text}
                                replies={comment.replies}
                                id={comment.id}
                                lastCommentId={lastCommentId}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}


export default CommentsList
