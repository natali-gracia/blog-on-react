import React from "react"

const PageBeauty = () => {
    return (
        <div>
            Browsing Category Beauty
        </div>						
    )
}

export default PageBeauty

// import PostsList from './PostsList'

// import postsData from './postsData'

// class PostsListWithBtn extends Component {

//     state = {
//         sliceValue: 6,
//         }
    
//     sliceChange = () => {
//         this.setState((prevState)=>({
//             sliceValue: prevState.sliceValue + 2
//         }));
//     }

//     render() {	
//         return (
//             <div>
//                 <div className="posts-list"> 
//                     <PostsList
//                     sliceValue = {this.state.sliceValue}
//                     />    												
//                 </div>
//                 <div className={this.state.sliceValue>=postsData.length ? 'hidden' : ''}>
//                     <button className="more-posts" onClick={this.sliceChange}>Load more posts</button>
//                 </div>                                       
//             </div>           				
//         )
//     }
// }

// export default PostsListWithBtn