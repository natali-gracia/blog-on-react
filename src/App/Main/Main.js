import React from "react"
import { Route } from "react-router-dom"

import'./main.css'

import MainContent from './MainContent/MainContent'
import AboutPage from './AboutPage/AboutPage'
import PostImage from './PostImage'
import BreadCrumb from "./BreadCrumb"
import PostPage from './PostPage/PostPage'
import PostsListWithBtn from './MainContent/PostsListWithBtn'
import PostsListCategories from './CategoryPage/PostsListCategories'
import PostsListTags from './TagsPage/PostsListTags'
import Sidebar from './Sidebar/Sidebar'

const Main = ({
	categoryInBreadcrumb,
	changeBrowsingCategory,
}) => {	
	return (
        <main>
			<Route path='/about/' render={()=>(
				<PostImage
					image='/images/postsimg/postsitemimg/about.jpg'
				/>
			)}/>
			<Route path='/post/:postTitle' component={PostImage}/>
			<Route path='/category/' render={()=>(
				<BreadCrumb
					categoryInBreadcrumb={categoryInBreadcrumb}
				/>)}/>
			<Route path='/tag/' render={()=>(
				<BreadCrumb
					categoryInBreadcrumb={categoryInBreadcrumb}
					classForFilterTitle = 'breadcrumb symbolsmall'
					browsingItem = 'Tag'
				/>)}/>
			<div className="col-md-10">
				<Route path='/about/' component={AboutPage}/>
				<div className="wrap">
					<div className="col-md-7">
						<Route exact path='/' render={()=>(
							<MainContent
							changeBrowsingCategory={changeBrowsingCategory}
							/>)}/>
						<Route path='/post/:postTitle' render={({match})=>(
							<PostPage
								match={match}
								changeBrowsingCategory={changeBrowsingCategory}
							/>)}/>
						<Route path='/category/' render={()=>(
							<div className="category-pagerow">
								<PostsListWithBtn
								categoryInBreadcrumb={categoryInBreadcrumb}
								PostsListRelevant={PostsListCategories}
								changeBrowsingCategory={changeBrowsingCategory}
								/>
							</div>)}/>
						<Route path='/tag/' render={()=>(
							<div className="category-pagerow">
								<PostsListWithBtn
								categoryInBreadcrumb={categoryInBreadcrumb}
								PostsListRelevant={PostsListTags}
								changeBrowsingCategory={changeBrowsingCategory}
								/>
							</div>)}/>
					</div>
					<div className="col-md-3">
						<Route exact path='/' component={Sidebar}/>
						<Route path={['/post/:postTitle', '/category/', '/tag/']} render={()=>(
							<Sidebar
								changeBrowsingCategory={changeBrowsingCategory}
							/>	
						)}/>
					</div>					
				</div>
			</div>
	    </main>						
	)
}

export default Main