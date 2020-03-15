import React from "react"
import PropTypes from "prop-types"
import "./postlistwidgetitem.css"

const PostListWidgetItem = ({
    title,
    date,
    imagesmall,
}) => {
        return (
            <div>
                <div className="imgholder">
                    <a href="/">
                        <img src={imagesmall} alt=""/>
                    </a>
                </div>
                <div className="widget-title">
                    <h4>
                        <a href="/">{title}</a>
                    </h4>
                    <div class="widget-date">{date}</div>                   
                </div>
            </div>
            )
    }


PostListWidgetItem.propTypes = {
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    image:PropTypes.string,
}

export default PostListWidgetItem