import React from "react"
import PostListItem from '../MainContent/PostListItem'
import postsData from '../MainContent/postsData'


const PostsListCategories = ({
    sliceValue,
    categoryInBreadcrumb
}) => {
        return (
            <div className="flex-wrap">
                {postsData.filter(post => post.сategories === categoryInBreadcrumb).sort((a,b)=> b.id - a.id).slice(0,sliceValue).map((post)=>(
                        <div key={post.id}>
                            <PostListItem 
                                title={post.title}
                                date={post.date}
                                image={post.image_postitem}
                                link={post.link}
                                excerpt={post.excerpt}
                                сategories={post.сategories}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsListCategories