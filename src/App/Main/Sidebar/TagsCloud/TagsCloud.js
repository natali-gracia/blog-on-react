import React from "react"
import TagCloudItem from './TagCloudItem'
import tagsData from './tagsData'


const TagsCloud = () => {
        return (
            <div>
                {tagsData.map((tag)=>(
                    <div className="row" key={tag.id}>    
                        <TagCloudItem 
                            name={tag.name}
                            link={tag.link}
                        />
                    </div>						
                    ))
                }         
            </div>
        )
}

export default TagsCloud