import React from "react"

import './slider.css'

const Slider = () => {	
	return (
		<div className="slider-row">
            <div className="slick">
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 13</div>
            </div>
		</div>						
	)
}

// $('.slick').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     autoplay: true,
//     autoplaySpeed: 3000,
//   });

export default Slider