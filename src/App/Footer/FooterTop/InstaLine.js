import React from "react"
import {Link} from "react-router-dom"

import'./footertop.css'

import instaData from './instaData'


const InstaLine = () => {
        return (
            <div className='wrap'>
                {instaData.reverse().slice(0,6).map((post)=>(  
                    <div className="insta-items" key={post.id}>
                        <Link to={post.link}><img src={post.image} title="Instagram post" alt=""/></Link>
                    </div>					
                    ))
                }         
            </div>
        )
}

export default InstaLine