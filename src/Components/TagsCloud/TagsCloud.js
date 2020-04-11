import React from "react"
import PropTypes from "prop-types"
import "./tagscloud.css"

import {Link} from "react-router-dom"

const TagsCloud = ({
    tags,
    changeBrowsingCategory,
}) => {
        return (
            <div className="tags-cloud">
                {tags.map((tag,i)=>(
                    <span key={i}>
                        <Link to={`/tag/${tag}`} onClick={() => changeBrowsingCategory(tag)}>
                            {tag}
                        </Link>
                    </span>
                    ))
                }
            </div>
            )
    }


TagsCloud.propTypes = {
    tags:PropTypes.array,
}


export default TagsCloud