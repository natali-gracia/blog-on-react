import React from "react"

import CommentsListItem from './CommentsListItem'
import commentsData from './commentsData'


const CommentsList = () => {

        const lastCommentId = commentsData[commentsData.length-1].id

        return (
            <div>
                {commentsData.map((post, id)=>(
                        <div key={id}>
                            <CommentsListItem                            
                                author={post.author}
                                avatar={post.avatar}
                                date={post.date}
                                link={post.link}
                                text={post.text}
                                replies={post.replies}
                                id={post.id}
                                lastCommentId={lastCommentId}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}


export default CommentsList
