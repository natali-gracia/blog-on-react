import React from "react"

import'./../PostPage/BlogPosts/poststext.css'

import MessageForm from './MessageForm'


const AboutPage = () => {
    return (
    <div style={{marginTop: 20}}>
        <div className='post-text'>        
            <h1>Hello! I’m so happy to have you here!</h1>           
            <span className="main-letter">M</span>
                y name is <strong>Anariel</strong> and I’m the storyteller. The purpose of this blog is to inspire you and adventure seekers to live intentionally, place value on experiences instead of possessions, and most of all, to encourage others to find joy exploring this beautiful world.
            <p>
                Anariel isn’t a typical beauty and travel blog... whilst I write about travel and adventure, I also share tips about photography, social media, being a woman in the outdoor community and couple travel.
            </p>
            <div className="post-quote">
                <span className="quote-text">
                I strongly believe life is meant to be experienced, not just dreamed about or put aside for another day. 
                </span>
            </div>
            <div style={{marginBottom: 10}}>
            <h3>Say Hi</h3>
            </div>   
        </div>
        <div>
            <MessageForm/>
        </div>

    </div>
    )
}

export default AboutPage