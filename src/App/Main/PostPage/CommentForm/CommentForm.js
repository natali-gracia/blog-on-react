import React from "react"

import './commentform.css'

const CommentForm = () => {
	return (
        <div className="comment-form">
                <form method="" action="">
                        <textarea name="comment" id="" cols="45" rows="8" tabIndex="4" required></textarea>
                        <label htmlFor='author'>
                                Name <small>(required)</small>
                                <br/>
                                <input type='text' id='author' name='author' required/>
                        </label>
                        <br/>
                        <label htmlFor='email'>
                                Mail <small>(required)</small>
                                <br/>
                                <input type='email' id='email' name='author_email' required/>
                        </label>
                        <br/>
                        <label htmlFor='url'>
                                Website
                                <br/>
                                <input type='url' id='url' name='website'/>
                        </label>
                        <div className='comment-btn'>
                                <button type="submit" value="Leave a comment" >
                                        Leave a comment
                                </button>
                        </div>                     
                </form>
        </div>
	)
}

export default CommentForm