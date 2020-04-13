import React from "react"
import PropTypes from "prop-types"

import './itempost.css'

import TagsCloud from "../../../../Components/TagsCloud/TagsCloud"

const BottomPostItem = ({
    changeBrowsingCategory,
    tags,
    inFavorites = false,
    id,
    addFavorites,
    removeFavorites,  
}) => {
	return (
        <div className="wrap">
            <div className="post-tags">
                <TagsCloud
                    tags={tags}
                    changeBrowsingCategory={changeBrowsingCategory}
                />
            </div>
            <div className="post-social">
                <div className="flex-row">
                    Share:
                    <div className="toolbox-social-icons">
                        <a href="/" title="Facebook" className="fb-icon-grey"></a>
                        <a href="/" title="YouTube" className="youtube-icon-grey"></a>
                        <a href="/" title="Instagram" className="insta-icon-grey"></a>
                        <a href="/" title="Pinterest" className="pint-icon-grey"></a>			
                    </div>
                    <div className="favorites-btn">
                        <button onClick={
                                ()=>inFavorites[id] ? removeFavorites(id) : addFavorites(id)
                            } title={
                                inFavorites[id] ? 'Remove from Favorites' : 'Add to Favorites'
                            }>
                            {inFavorites[id] ? <span className="isLiked"></span> : <span className="noLiked"></span>}
                                Favorites                
                        </button>
                    </div>
                </div>
            </div>
        </div>
	)
}

BottomPostItem.propTypes = {
    tags:PropTypes.array,
}


export default BottomPostItem