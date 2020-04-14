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

    componentDidUpdate(prevProps) {
        if (this.props.match.url !== prevProps.match.url) {
            this.setState({sliceValue: 6})
        } 
      }


    render() {	

        const {
            PostsListRelevant = PostsList,
            categoryInBreadcrumb,
            changeBrowsingCategory,
            relevantArray = postsData,
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
                <div className={this.state.sliceValue>=relevantArray.length ? 'hidden' : ''}>
                    <button className="more-posts" onClick={this.sliceChange}>Load more posts</button>
                </div>                                       
            </div>           				
        )
    }
}

export default PostsListWithBtn