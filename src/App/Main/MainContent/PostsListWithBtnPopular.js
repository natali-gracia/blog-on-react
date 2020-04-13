import React,{Component} from "react"

import'./maincontent.css'

import postsData from './postsData'
import PostsListPopular from "./PostsListPopular"

class PostsListWithBtnPopular extends Component {

    state = {
        sliceValue: 6,
        }
    
    sliceChange = () => {
        this.setState((prevState)=>({
            sliceValue: prevState.sliceValue + 2
        }));
    }

    render() {	

        const {
            categoryInBreadcrumb,
            changeBrowsingCategory,
            favoritesButtonState,
            addFavorites,
            removeFavorites,
        } = this.props

        console.log(this.state.sliceValue)

        return (
            <div>
                <div className="posts-list"> 
                    <PostsListPopular
                    sliceValue = {this.state.sliceValue}
                    categoryInBreadcrumb = {categoryInBreadcrumb}
                    changeBrowsingCategory={changeBrowsingCategory}
                    favoritesButtonState={favoritesButtonState}
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                    />    												
                </div>
                <div className={this.state.sliceValue>=postsData.length ? 'hidden' : ''}>
                    <button className="more-posts" onClick={this.sliceChange}>Load more posts</button>
                </div>                                       
            </div>           				
        )
    }
}

export default PostsListWithBtnPopular