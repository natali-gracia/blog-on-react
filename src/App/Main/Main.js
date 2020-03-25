import React from "react"
import { Route } from "react-router-dom"

import'./main.css'

import MainContent from './MainContent/MainContent'
import PostContent from './PostContent/PostContent'
import Sidebar from './Sidebar/Sidebar'


const Main = () => {	
	return (
        <main>
			<Route path='/enjoy-the-winter-time-in-the-city' render={() => 
					<div className="col-md-12">
						<img src="/images/postsimg/anariel-post-11.jpg" alt=""/>
					</div>
				} 
			/>
			<div className="col-md-10">
				<div className="wrap">
					<div className="col-md-7">
						<Route exact path='/'>
							<MainContent/>
						</Route> 
						<PostContent/>
					</div>
					<div className="col-md-3">
						<Sidebar/>	
					</div>					
				</div>
			</div>
	    </main>						
	)
}

export default Main