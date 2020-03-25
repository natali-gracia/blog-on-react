import React from "react"

import './relatedposts.css'

import postsData, {getPostsMap} from "./../../MainContent/postsData"

import RelatedPostsItem from './RelatedPostsItem'


const RelatedPosts = ({
        postItemData = getPostsMap(postsData),
        id,
}) => {
	return (
                <div className="flex-wrap">
                        {postsData.filter(post => post.сategories === postItemData[id].сategories).filter(post => post.id != postItemData[10].id).sort((a,b)=> b.id - a.id).slice(0.3).map((post)=>(
                                <div className="related-post-item" key={post.id}>
                                        <RelatedPostsItem
                                                title={post.title}
                                                date={post.date}
                                                link={post.link}
                                                image={post.image_widget}
                                        />
                                </div>
                                ))
                        }
                </div>							
	)
}

export default RelatedPosts