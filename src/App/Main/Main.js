import React from "react"
import { Route } from "react-router-dom"

import'./main.css'

import postsData from './MainContent/postsData'

import MainContent from './MainContent/MainContent'
import AboutPage from './AboutPage/AboutPage'
import PostImage from './PostImage'
import BreadCrumb from "./BreadCrumb"
import PostPage from './PostPage/PostPage'
import PostsListWithBtn from './MainContent/PostsListWithBtn'
import PostsListCategories from './CategoryPage/PostsListCategories'
import PostsListTags from './TagsPage/PostsListTags'
import PostsListFavorites from './FavoritesPage/PostsListFavorites'
import Sidebar from './Sidebar/Sidebar'

const Main = ({
			categoryInBreadcrumb,
			changeBrowsingCategory,
			favoritesButtonState,
			addFavorites,
			removeFavorites,
}) => {

	return (
		<main>
				<Route path='/about/' render={()=>(
					<PostImage
						image='/images/postsimg/postsitemimg/about.jpg'
					/>
				)}/>
				<Route path='/post/:postTitle' component={PostImage}/>
				<Route path={['/category/', '/favorites/']} render={()=>(
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
								favoritesButtonState={favoritesButtonState}
								addFavorites={addFavorites}
								removeFavorites={removeFavorites}
								/>)}/>
							<Route path='/post/:postTitle' render={({match})=>(
								<PostPage
									match={match}
									changeBrowsingCategory={changeBrowsingCategory}
									favoritesButtonState={favoritesButtonState}
									addFavorites={addFavorites}
									removeFavorites={removeFavorites}
								/>)}/>
							<Route path='/category/' render={()=>(
								<div className="category-pagerow">
									<PostsListWithBtn
									PostsListRelevant={PostsListCategories}
									categoryInBreadcrumb={categoryInBreadcrumb}
									changeBrowsingCategory={changeBrowsingCategory}
									favoritesButtonState={favoritesButtonState}
									addFavorites={addFavorites}
									removeFavorites={removeFavorites}
									relevantArray = {postsData.filter((post) => 
										post.сategories.filter((category) => 
										category === categoryInBreadcrumb)[0] === categoryInBreadcrumb)}
									/>
								</div>)}/>
							<Route path='/tag/' render={()=>(
								<div className="category-pagerow">
									<PostsListWithBtn
									PostsListRelevant={PostsListTags}
									categoryInBreadcrumb={categoryInBreadcrumb}
									changeBrowsingCategory={changeBrowsingCategory}
									favoritesButtonState={favoritesButtonState}
									addFavorites={addFavorites}
									removeFavorites={removeFavorites}
									relevantArray = {postsData.filter((post) => 
										post.tags.filter((tag) => 
										tag === categoryInBreadcrumb)[0] === categoryInBreadcrumb)}
									/>
								</div>)}/>
							<Route path='/favorites/' render={()=>(
								<div className="category-pagerow">
									<PostsListWithBtn
									PostsListRelevant={PostsListFavorites}
									categoryInBreadcrumb={categoryInBreadcrumb}
									changeBrowsingCategory={changeBrowsingCategory}
									favoritesButtonState={favoritesButtonState}
									addFavorites={addFavorites}
									removeFavorites={removeFavorites}
									relevantArray = {Object.keys(favoritesButtonState)}
									/>
								</div>)}/>
						</div>
						<div className="col-md-3">
							<Route exact path='/' render={()=>(
								<Sidebar
									changeBrowsingCategory={changeBrowsingCategory}
								/>	
							)}/>
							<Route path={['/post/:postTitle', '/category/', '/tag/', '/favorites/']} render={()=>(
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