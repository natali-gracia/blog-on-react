import React,{Component} from "react"

import'./maincontent.css'

import PostsList from './PostsList'

import postsData from './postsData'

class PostsListWithBtn extends Component {

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
            PostsListRelevant = PostsList,
            categoryInBreadcrumb,
            changeBrowsingCategory,
            categoryArray = postsData.filter(post => post.categories === categoryInBreadcrumb),
        } = this.props

        return (
            <div>
                <div className="posts-list"> 
                    <PostsListRelevant
                    sliceValue = {this.state.sliceValue}
                    categoryInBreadcrumb = {categoryInBreadcrumb}
                    changeBrowsingCategory={changeBrowsingCategory}
                    />    												
                </div>
                <div className={this.state.sliceValue>=categoryArray.length || this.state.sliceValue>=postsData.length ? 'hidden' : ''}>
                    <button className="more-posts" onClick={this.sliceChange}>Load more posts</button>
                </div>                                       
            </div>           				
        )
    }
}

export default PostsListWithBtn