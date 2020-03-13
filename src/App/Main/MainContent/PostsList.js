import React from "react"
import PostListItem from './PostListItem'
import postsData from './postsData'


const PostsList = () => {	
	return (
        <div className="flex-wrap">
            {postsData.map((post)=>(
                    <div>
                        <PostListItem 
                            title={post.title}
                            date={post.date}
                            image={post.image}
                            excerpt={post.excerpt}
                            сategory1={post.сategory1}
                            сategory2={post.сategory2}
                            сategory3max={post.сategory3max}
                        />
                    </div>
                ))
               }
	    </div>						
	)
}

export default PostsList