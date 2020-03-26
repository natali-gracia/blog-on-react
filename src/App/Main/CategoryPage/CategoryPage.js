import React from "react"
import { Route } from "react-router-dom"

import PageBeauty from './PageBeauty'
import PageFashion from './PageFashion'
import PageTravels from './PageTravels'
import PageLifestyle from './PageLifestyle'


const CategoryPage = () => {
	return (
		<div>
			<Route path='/category/beauty'>
				<PageBeauty/>
			</Route>
            <Route path='/category/fashion'>
				<PageFashion/>
			</Route>
            <Route path='/category/travels'>
				<PageTravels/>
			</Route>
            <Route path='/category/lifestyle'>
				<PageLifestyle/>
			</Route>
		</div>							
	)
}

export default CategoryPage