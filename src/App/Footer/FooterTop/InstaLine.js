import React from "react"

import'./footertop.css'

import instaData from './instaData'


const InstaLine = () => {
        return (
            <div className='wrap'>
                {instaData.reverse().slice(0,6).map((post)=>(  
                    <div className="insta-items" key={post.id}>
                        <a href={post.link}><img src={post.image} title="Instagram post" alt=""/></a>
                    </div>					
                    ))
                }         
            </div>
        )
}

export default InstaLine