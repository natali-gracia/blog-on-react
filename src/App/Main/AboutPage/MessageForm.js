import React from "react"

import './../PostPage/CommentForm/commentform.css'

const MessageForm = () => {
	return (
        <div className="comment-form">
                <form method="" action="">
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
                                Subject
                                <br/>
                                <input type='url' id='url' name='website'/>
                        </label>
                        <br/>Your Message<br/>
                        <textarea name="comment" id="text-area" cols="45" rows="8" tabIndex="4" required></textarea>
                        <div className='comment-btn'>
                                <button type="submit" value="Leave a comment" >
                                        Send
                                </button>
                        </div>                     
                </form>
        </div>
	)
}

export default MessageForm