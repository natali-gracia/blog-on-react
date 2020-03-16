import React,{Component} from "react"

import'./maincontent.css'

import PostsList from './PostsList'
import PostsListPopular from './PostsListPopular'
import RadioButtons from './RadioButtons'


import postsData from './postsData'

class MainContent extends Component {

    state = {
        sliceValue: 6,
        postsFilter: 'Recent posts',
        }
    
    sliceChange = () => {
        this.setState((prevState)=>({
            sliceValue: prevState.sliceValue + 2
        }));
    }
    onRadioButton = (event) => {
        this.setState({
            postsFilter: event.target.value
        });
      }

    render() {	
        return (
            <div>
                <div className="posts-nav">
                    <RadioButtons
                    postsFilter = {this.state.postsFilter}
                    onRadioButton = {this.onRadioButton}
                    />
                </div>
                <div className="posts-list">
                    <PostsListPopular
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