import React,{Component} from "react"

import'./maincontent.css'

import PostsList from './PostsList'
import postsData from './postsData'

class MainContent extends Component {

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
                <div className="posts-nav flex-wrap">
                    <div className="btn-posts-nav active">
                        <a href="">Recent posts</a>
                    </div>
                    <div className="btn-posts-nav">
                        <a href="">Popular posts</a>
                    </div>
                </div>
                <div className="posts-list">
                    <PostsList
                    sliceValue = {this.state.sliceValue}
                    /> 												
                </div>
                <div className={this.state.sliceValue>=postsData.length ? 'hidden' : ''}>
                    <button className="more-posts" onClick={this.sliceChange}>Load more posts</button>
                </div>
            </div> 				
        )
        }
}

export default MainContent