import React,{Component} from "react"

import Slider from "react-slick"
import {Link} from "react-router-dom"
import { Parallax, Background } from 'react-parallax'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './sliderparallax.css'

import postsData from '../Main/MainContent/postsData'


class SliderFadeParallax extends Component {
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
        autoplaySpeed: 4500,
      }
      
      return (
        <div className="slider-row">
          <Slider {...settings}>
            {postsData.sort((a,b)=> b.id - a.id).slice(0,3).map((post)=>(
            <Parallax strength={120} key={post.id}>
              <div className="slick-slide-item">
                  <div className="slick-image"><img src={post.image} alt={post.title}/></div>
                  <div className="slider-content">
                      <div className="item-date">{post.date}</div>	
                      <div className="item-subtitle">{post.title}</div>
                      <div className="item-btn-more">
                          <button type="button"><Link to={`/post/${post.title_link}`}>READ MORE</Link></button> 
                      </div>					
				          </div>
              </div>
              <Background>
                <div className="bg-image"><img src={post.image} alt={post.title}/></div>
              </Background>
            </Parallax>
            ))
          }
          </Slider>
        </div>
      );
    }
  }

export default SliderFadeParallax