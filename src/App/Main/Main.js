import React from "react"

import'./main.css'

import MainContent from './MainContent/MainContent'
// import Sidebar from './Sidebar/Sidebar'


const Main = () => {	
	return (
        <main>
		    <div className="main-wrap">
			    <div className="col-md-10">
				    <div className="wrap">
					    <div className="col-md-7">
						    <MainContent/>
                        </div>
					    <div className="col-md-3">
                            Sidebar
						    {/* <Sidebar/>	 */}
					    </div>					
				    </div>
			    </div>
		    </div>
	    </main>						
	)
}

export default Main