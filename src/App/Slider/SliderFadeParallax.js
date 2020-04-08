import React,{Component} from "react"

import Slider from "react-slick"
import {Link} from "react-router-dom"
import { Parallax, Background } from 'react-parallax'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './sliderparallax.css'

import postsData, {getPostsMap} from './../Main/MainContent/postsData'


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
        autoplaySpeed: 4500,
      };
      const {
        postItemData = getPostsMap(postsData),
      } = this.props
      return (
        <div className="slider-row">
          <Slider {...settings}>
            <Parallax strength={120}>
              <div className="slick-slide-one">
                  <div className="slick-image"><img src={postItemData[10].image}/></div>
                  <div className="slider-content">
                      <div className="item-date">{postItemData[10].date}</div>	
                      <div className="item-subtitle">{postItemData[10].title}</div>
                      <div className="item-btn-more">
                          <button type="button"><Link to={`/post/${postItemData[10].title_link}`}>READ MORE</Link></button> 
                      </div>					
				          </div>
              </div>
              <Background className="bg-image">
                <img src={postItemData[10].image} alt="fill murray"/>
              </Background>
            </Parallax>
            <Parallax strength={120}>
              <div className="slick-slide-two">
                  <div className="slick-image"><img src={postItemData[6].image}/></div>
                  <div className="slider-content">
                      <div className="item-date">{postItemData[6].date}</div>	
                      <div className="item-subtitle">{postItemData[6].title}</div>
                      <div className="item-btn-more">
                          <button type="button"><Link to={`/post/${postItemData[6].title_link}`}>READ MORE</Link></button> 
                      </div>					
				          </div>
              </div>
              <Background className="bg-image">
                <img src={postItemData[6].image} alt="fill murray"/>
              </Background>
            </Parallax>
            <Parallax strength={120}>
              <div className="slick-slide-three">
                  <div className="slick-image"><img src={postItemData[5].image}/></div>
                  <div className="slider-content">
                      <div className="item-date">{postItemData[5].date}</div>	
                      <div className="item-subtitle">{postItemData[5].title}</div>
                      <div className="item-btn-more">
                          <button type="button"><Link to={`/post/${postItemData[5].title_link}`}>READ MORE</Link></button> 
                      </div>					
				          </div>
              </div>
                <Background className="bg-image">
                  <img src={postItemData[5].image} alt="fill murray"/>
                </Background>
            </Parallax>
          </Slider>
        </div>
      );
    }
  }

export default SliderFade