import React from "react"
import { Route } from "react-router-dom"

import'./main.css'

import MainContent from './MainContent/MainContent'
import PostImage from './PostImage'
import BreadCrumb from "./BreadCrumb"
import PostPage from './PostPage/PostPage'
import CategoryPage from './CategoryPage/CategoryPage'
import Sidebar from './Sidebar/Sidebar'

const Main = ({
	categoryInBreadcrumb,
	changeBrowsingCategory,
}) => {	
	return (
        <main>
			<Route path='/post/'><PostImage/></Route>
			<Route path='/category/' render={()=>(
				<BreadCrumb 
				categoryInBreadcrumb={categoryInBreadcrumb}
				/>)}/>
			<div className="col-md-10">
				<div className="wrap">
					<div className="col-md-7">
						<Route exact path='/'><MainContent/></Route>
						<Route path='/post/'><PostPage/></Route>
						<Route path='/category/' render={()=>(
							<CategoryPage
							categoryInBreadcrumb={categoryInBreadcrumb}
							/>)}/> 
					</div>
					<div className="col-md-3">
						<Sidebar
						changeBrowsingCategory={changeBrowsingCategory}
						/>	
					</div>					
				</div>
			</div>
	    </main>						
	)
}

export default Main