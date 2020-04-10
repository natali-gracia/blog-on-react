import React from "react"

import postsData, {getPostsMap} from "../../MainContent/postsData"

import RelatedPostsItem from './RelatedPostsItem'


const RelatedPosts = ({
        postItemData = getPostsMap(postsData),
        id,
}) => { 

        const RelatedPostsFilter = postsData.filter((post,item) => post.сategories[item] === postItemData[id].сategories[item]).filter(post => post.id !== postItemData[id].id).sort((a,b)=> b.id - a.id).slice(0,3)

        const LastRelatedPostsId = RelatedPostsFilter[RelatedPostsFilter.length-1].id

	return (
                <div className="wrap">
                        {RelatedPostsFilter.map((post)=>(
                                <div key={post.id}>
                                        <RelatedPostsItem
                                                id={post.id}
                                                title={post.title}
                                                date={post.date}
                                                title_link={post.title_link}
                                                image={post.image_widget}
                                                LastRelatedPostsId={LastRelatedPostsId}
                                        />
                                </div>
                                ))
                        }
                </div>							
	)
}

export default RelatedPosts