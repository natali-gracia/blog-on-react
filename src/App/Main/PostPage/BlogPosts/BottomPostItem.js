import React from "react"
import {connect} from 'react-redux'
import PropTypes from "prop-types"

import {Link} from "react-router-dom"

import './itempost.css'

import TagsCloud from "../../../../Components/TagsCloud/TagsCloud"

const BottomPostItem = ({
    changeBrowsingCategory,
    tags,
    id,
    inFavorites = false,
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
                        <Link to="/" title="Facebook" className="fb-icon"></Link>            
                        <Link to="/" title="YouTube" className="youtube-icon"></Link>
                        <Link to="/" title="Instagram" className="insta-icon"></Link>
                        <Link to="/" title="Pinterest" className="pint-icon"></Link>			
                    </div>
                    <div className="favorites-btn">
                        <button onClick={
                                ()=>inFavorites ? removeFavorites(id) : addFavorites(id)
                            } title={
                                inFavorites ? 'Remove from Favorites' : 'Add to Favorites'
                            }>
                            {inFavorites ? <span className="isLiked"></span> : <span className="noLiked"></span>}
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

const mapStateToProps = (state,props) => ({
    inFavorites:state[props.id],
})

const mapDispatchToProps = (dispatch) => ({
    addFavorites:(id)=>dispatch({
        type: 'FAVORITES',
        id:id,
    }),
    removeFavorites:(id)=>dispatch({
        type: 'NOFAVORITES',
        id:id,
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (BottomPostItem)