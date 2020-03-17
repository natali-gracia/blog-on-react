import React from "react"
import PropTypes from "prop-types"
import "./tagclouditem.css"

const TagCloudItem = ({
    name,
    link,
}) => {
        return (
            <div className="tags-cloud">
                <a href={link}>{name}</a>
            </div>
            )
    }


TagCloudItem.propTypes = {
    name:PropTypes.string.isRequired,
    link:PropTypes.string,
}


export default TagCloudItem