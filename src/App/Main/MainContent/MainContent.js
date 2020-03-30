import React,{Component} from "react"

import'./maincontent.css'

import PostsListWithBtn from './PostsListWithBtn'
import  PostsListPopular from './PostsListPopular'
import RadioButtons from './RadioButtons'


class MainContent extends Component {

    state = {
        postsFilter: 'Recent posts',
        }
    
    onRadioButton = (event) => {
        this.setState({
            postsFilter: event.target.value
        });
      }

    render() {
        
        const {
            changeBrowsingCategory,
        } = this.props
        
        return (
            <div className="maincontent-row">
                <div className="posts-nav">
                    <RadioButtons
                    postsFilter = {this.state.postsFilter}
                    onRadioButton = {this.onRadioButton}
                    />
                </div>
                <div>
                    {this.state.postsFilter==='Recent posts' ?
                        <PostsListWithBtn
                        changeBrowsingCategory={changeBrowsingCategory}
                        /> : 
                        <PostsListWithBtn
                        PostsListRelevant={PostsListPopular}
                        changeBrowsingCategory={changeBrowsingCategory}
                        /> 
                    }                                    
                </div>
            </div> 				
        )
        }
}

export default MainContent