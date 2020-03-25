import React from "react"

import './commentslist.css'

import CommentsListItem from './CommentsListItem'
import commentsData from './commentsData'


const CommentsList = () => {
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
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}


export default CommentsList
