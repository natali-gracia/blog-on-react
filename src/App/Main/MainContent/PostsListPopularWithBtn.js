import React,{Component} from "react"

import'./maincontent.css'

import PostsListPopular from './PostsListPopular'

import postsData from './postsData'

class PostsListPopularWithBtn extends Component {

    state = {
        sliceValue: 6,
        }
    
    sliceChange = () => {
        this.setState((prevState)=>({
            sliceValue: prevState.sliceValue + 2
        }));
    }

    render() {	
        return (
            <div>
                <div className="posts-list"> 
                    <PostsListPopular
                    sliceValue = {this.state.sliceValue}
                    />    												
                </div>
                <div className={this.state.sliceValue>=8 ? 'hidden' : ''}>
                    <button className="more-posts" onClick={this.sliceChange}>Load more posts</button>
                </div>                                       
            </div>           				
        )
    }
}

export default PostsListPopularWithBtn