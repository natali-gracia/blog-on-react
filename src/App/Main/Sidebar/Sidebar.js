import React from "react"

import'./sidebar.css'

import SubscrForm from './SubscrForm/SubscrForm'
import WidgetSocialIcons from './WidgetSocialIcons'

const Sidebar = () => {	
	return (
        <div>
            <div className="widget">
                <h3>About me</h3>
                <div className="text-widget">
                    <p><img src="/images/anariel-post-avatar-1.jpg" alt=""/></p>
                    <p>Hello, my name is <b>Anariel</b>. I am a blogger living in New York. This is my blog, where I post my photos and traveling tips. Never miss out on new stuff.</p>
                </div>
			</div>
            <div className="widget widget-subscr">
                <h3>Subscribe to our Newsletter</h3>
                <SubscrForm/>
            </div>
            <div className="widget widget-social">
                <WidgetSocialIcons/>
            </div>
            <div className="widget">
                <h3>Popular Posts</h3>
                
            </div>

        </div> 				
	)
}

export default Sidebar