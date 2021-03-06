import React from "react"
import PropTypes from "prop-types"
import "./postlistwidgetitem.css"

import {Link} from "react-router-dom"

const PostListWidgetItem = ({
    title,
    date,
    image,
    title_link,
}) => {
        return (
            <div>
                <div className="imgholder">
                    <Link to={`/post/${title_link}`} title={title}>
                        <img src={image} alt=""/>
                    </Link>	
                </div>
                <div className="widget-title">
                    <h4>
                        <Link to={`/post/${title_link}`}>
                            {title}
                        </Link>	
                    </h4>
                    <div className="widget-date">{date}</div>                   
                </div>
            </div>
            )
    }


PostListWidgetItem.propTypes = {
    title:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    image:PropTypes.string,
    title_link:PropTypes.string,
}

export default PostListWidgetItem