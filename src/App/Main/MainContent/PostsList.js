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
                        <div key={post.id}>
                            <PostListItem 
                                title={post.title}
                                date={post.date}
                                image={post.image_postitem}
                                title_link={post.title_link}
                                excerpt={post.excerpt}
                                сategories={post.сategories}
                                categoriesArray={post.сategoriesArray}
                                categoriesArray_1={post.categoriesArray_1}
                                category_link={post.category_link}
                                changeBrowsingCategory={changeBrowsingCategory}
                            />
                        </div>
                    ))
                }
            </div>						
	    )
}

export default PostsList