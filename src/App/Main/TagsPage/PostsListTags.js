import React from "react"
import PostListItem from './../MainContent/PostListItem'
import postsData from './../MainContent/postsData'

const PostsListTags = ({
    sliceValue,
    categoryInBreadcrumb,
    changeBrowsingCategory,
}) => {
        return (
            <div className="flex-wrap">
                {postsData.filter((post) => 
                    post.tags.filter((tag) => tag === categoryInBreadcrumb)[0] === categoryInBreadcrumb)
                    .sort((a,b)=> b.id - a.id).slice(0,sliceValue).map((post)=>(
                        <div key={post.id}>
                            <PostListItem 
                                id={post.id}
                                title={post.title}
                                date={post.date}
                                image={post.image_postitem}
                                title_link={post.title_link}
                                excerpt={post.excerpt}
                                сategories={post.сategories}
                                changeBrowsingCategory={changeBrowsingCategory}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsListTags