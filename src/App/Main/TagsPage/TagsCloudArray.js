import React from "react"

import postsData from '../MainContent/postsData'
import TagsCloud from "./../../../Components/TagsCloud/TagsCloud"


const TagsCloudArray = ({
    changeBrowsingCategory
}) => {
        return (
            <div>
                <TagsCloud
                    changeBrowsingCategory={changeBrowsingCategory}
                    tags = {
                        [...new Set([...postsData.map((post)=>post.tags).flat()])]
                        }
                />
            </div>
            )
    }


export default TagsCloudArray