import React from "react"
import {connect} from 'react-redux'

import'./responsemenu.css'

import {Link} from "react-router-dom"

const ResponseMenu = ({ 
    changeBrowsingCategory,
    inFavorites,
    respMenu,
    showRespMenu,
}) => {
	
        return (
            <div>
                <div className="resp-menu-btn">
                    <button className="menu-icon" onClick={()=>showRespMenu()}></button>
                </div>
                <div className={respMenu === false ? 'resp-menu-dropdown' : 'resp-menu-dropdown  is-menu-open'}>
                    <div>
                        <Link to="/" onClick={()=>showRespMenu()}>Home</Link>
                        <Link to="/category/beauty" onClick={() => {changeBrowsingCategory('beauty'); showRespMenu()}}>
                            Beauty
                        </Link>
                        <Link to="/category/fashion" onClick={() => {changeBrowsingCategory('fashion'); showRespMenu()}}>
                            Fashion
                        </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {changeBrowsingCategory('fashion'); showRespMenu()}}>
                                    News
                            </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {changeBrowsingCategory('fashion'); showRespMenu()}}>
                                    Trends
                            </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {changeBrowsingCategory('fashion'); showRespMenu()}}>
                                    Collections
                            </Link>
                            <Link to="/category/fashion" className="item-child" 
                                onClick={() => {changeBrowsingCategory('fashion'); showRespMenu()}}>
                                    Everyday fashion
                            </Link>
                        <Link to="/category/travels" onClick={() => {changeBrowsingCategory('travels'); showRespMenu()}}>
                            Travels
                        </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {changeBrowsingCategory('travels'); showRespMenu()}}>
                                    Countries
                            </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {changeBrowsingCategory('travels'); showRespMenu()}}>
                                    Active travels
                            </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {changeBrowsingCategory('travels'); showRespMenu()}}>
                                    My tops
                            </Link>
                            <Link to="/category/travels" className="item-child" 
                                onClick={() => {changeBrowsingCategory('travels'); showRespMenu()}}>
                                    Lifehacks
                            </Link>
                        <Link to="/category/lifestyle" 
                            onClick={() => {changeBrowsingCategory('lifestyle'); showRespMenu()}}>
                                Lifestyle
                        </Link>
                        <Link to="/about/" onClick={()=>showRespMenu()}>About me</Link>
                        <Link to="/favorites/" onClick={() => {changeBrowsingCategory('favorites'); showRespMenu()}}>
                            Favorites
                            <span className="favresp-count">
                                {(Object.keys(inFavorites).filter((postId) => inFavorites[postId] === true)).length}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>   
    )
}

const mapStateToProps = (state) => ({
    inFavorites:state,
})

export default connect(
    mapStateToProps,
) (ResponseMenu)