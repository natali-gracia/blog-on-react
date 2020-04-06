import React from "react"
import PostListItem from './PostListItem'
import postsData from './postsData'


const PostsList = ({
    sliceValue,
    changeBrowsingCategory,
}) => {

        return (
            <div className="flex-wrap">
                {postsData.sort((a,b)=> b.id - a.id).slice(0,sliceValue).map((post)=>(
                        <PostListItem
                            id={post.id}
                            title={post.title}
                            date={post.date}
                            image={post.image_postitem}
                            title_link={post.title_link}
                            excerpt={post.excerpt}
                            сategories={post.сategories}
                            changeBrowsingCategory={changeBrowsingCategory}
                            key={post.id}
                        />
                    ))
                }
            </div>						
	    )
}

export default PostsList