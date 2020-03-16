import React from "react"

import'./radiobuttons.css'


const RadioButtons = ({
    postsFilter,
    onRadioButton
}) => {
        return (
            <div className="flex-wrap">
                <div className="btn-posts-nav">
                    <label className={postsFilter === "Recent posts" ? 'checked' : ''}>
						<input type="radio" name="RadioButtons" value="Recent posts" checked={postsFilter === "Recent posts"} onChange={onRadioButton} /><p>Recent posts</p>
					</label>
                </div>
                <div className="btn-posts-nav">
					<label className={postsFilter === "Popular posts" ? 'checked' : ''}>
						<input type="radio" name="RadioButtons" value="Popular posts" checked={postsFilter === "Popular posts"} onChange={onRadioButton}/><p>Popular posts</p>
					</label>
                </div>
            </div>					
	    )
}

export default RadioButtons