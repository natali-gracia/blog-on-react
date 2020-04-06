import React from "react"

import commentsData from './../../App/Main/PostPage/CommentsList/commentsData'
import postsData, {getPostsMap} from './../../App/Main/MainContent/postsData'

const CommentsListLength = ({
    postItemData = getPostsMap(postsData),
    id,
}) => {
    const CommentsArray = commentsData.filter((comment) => comment.link_relative === postItemData[id].title_link)
    const FullRepliesArray = CommentsArray.map((comment)=>(
                comment.replies.map((comment)=>(
                    comment.replies.map((comment)=>(
                        comment.replies
                    ))
                ))))
    return (
        FullRepliesArray.flat(0).length + FullRepliesArray.flat(1).length + FullRepliesArray.flat(2).length
    )           

}

export default CommentsListLength