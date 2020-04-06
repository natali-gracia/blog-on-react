import React from "react"
import {Link} from "react-router-dom"

import './postsnav.css'

const PostsNav = ({
        prev_title_link,
        prev_title,
        next_title_link,
        next_title,
}) => { 
	return (
        <div className="wrap">
                <div className={prev_title === null ? 'hidden' : ''}>
                        <Link to={`/post/${prev_title_link}`} className="link-title-previous">
                                <span>« Previous post</span>
                                <div className="prev-post-title">{prev_title}</div>
                        </Link>
                </div>
                <div className={next_title === null ? 'hidden' : ''}>
                        <Link to={`/post/${next_title_link}`} className="link-title-next">
                                <span>« Next post</span>
                                <div className="next-post-title">{next_title}</div>
                        </Link>
                </div>
        </div>
	)
}

export default PostsNav