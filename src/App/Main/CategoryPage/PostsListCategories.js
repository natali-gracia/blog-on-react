import React from "react"
import PostListItem from '../MainContent/PostListItem'
import postsData from '../MainContent/postsData'


const PostsListCategories = ({
    sliceValue,
    categoryInBreadcrumb,
    changeBrowsingCategory
}) => {
        return (
            <div className="flex-wrap">
                {postsData.filter(post => post.сategories === categoryInBreadcrumb).sort((a,b)=> b.id - a.id).slice(0,sliceValue).map((post)=>(
                        <div key={post.id}>
                            <PostListItem 
                                title={post.title}
                                date={post.date}
                                image={post.image_postitem}
                                title_link={post.title_link}
                                excerpt={post.excerpt}
                                сategories={post.сategories}
                                category_link={post.category_link}
                                changeBrowsingCategory={changeBrowsingCategory}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsListCategories