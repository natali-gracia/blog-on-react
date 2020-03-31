import React,{Component} from "react"
import Slider from "react-slick"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.css'

import {Link} from "react-router-dom"


class SliderFade extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3500,
      };
      return (
        <div className="slider-row">
          <Slider {...settings}>
              <div className="slick-slide-one">
                  <div className="col-md-10 slider-content">
					            <div className="col-md-7 items-caption">
                          <div className="item-date">February 14, 2020</div>	
                          <div className="item-subtitle">Enjoy the winter time in the city</div>
                          <div className="item-btn-more">
                              <button type="button"><Link to="/post/enjoy-the-winter-time-in-the-city">READ MORE</Link></button> 
						              </div>					
					            </div>
				          </div>
              </div>
              <div className="slick-slide-two">
                  <div className="col-md-10 slider-content">
					            <div className="col-md-7 items-caption">
                          <div className="item-date">November 23, 2019</div>	
                          <div className="item-subtitle">Fashion tips for autumn days</div>
                          <div className="item-btn-more">
                              <button type="button"><Link to="/post/fashion-tips-for-autumn-days">READ MORE</Link></button> 
						              </div>					
					            </div>
				          </div>
              </div>
              <div className="slick-slide-three">
                  <div className="col-md-10 slider-content">
					            <div className="col-md-7 items-caption">
                          <div className="item-date">October 30, 2019</div>	
                          <div className="item-subtitle">Come with me on a drive to the country</div>
                          <div className="item-btn-more">
                              <button type="button"><Link to="/post/come-with-me-on-a-drive-to-the-country">READ MORE</Link></button> 
						              </div>					
					            </div>
				          </div>
              </div>
          </Slider>
        </div>
      );
    }
  }

export default SliderFade