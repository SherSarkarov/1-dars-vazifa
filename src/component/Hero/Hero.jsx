import React from 'react'
import './Hero.css'
import heroimg from "../../assets/Photo.jpg"
import time from "../../assets/time-eat.svg"
import delivery from "../../assets/delivery.svg"
import paris from "../../assets/paris.svg"


export const Hero = () => {
  return (
 <>
  <div className="wrapper">
    <div className="container">
    <div>
      <div className="hero__title-wrap">
      <h1>Your Food court at home</h1>
      </div>
      <div className="hero_left-bottom">
        <a className="hero_bottom-doub">
          <p href="" className="hero__bottom-link">Delivery</p>
          <p href="" className="hero__bottom-link">Order in</p>
        </a>
        <a className="hero_bottom-doub">
          <p href="" className="hero__bottom-link">Takeout</p>
          <p href="" className="hero__bottom-link">Grab and go</p>
        </a>
      </div>
    </div>
    <img src={heroimg} alt="vegan food" width={803} height={706} className='hero__img' />
    
      <div className="hero__bottom">
        <div className="bottom__inner">
          <img src={time} alt="" className="bottom_img" />
          <p className="bottom_txt">delivery in all paris in less than 30 minutes</p>
        </div>
        <div className="bottom__inner">
          <img src={delivery} alt="" className="bottom_img" />
          <p className="bottom_txt">Free delivery from 29 euros</p>
        </div>
        <div className="bottom__inner">
          <img src={paris} alt="" className="bottom_img" />
          <p className="bottom_txt">Only fresh and French products</p>
        </div>
      </div>
  </div>
  </div>
 </>   
  )
}
