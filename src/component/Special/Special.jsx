import React from 'react'
import "./Special.css"

import bagel from "../../assets/bagel.svg"
import burger from "../../assets/burger.svg"
import chicken from "../../assets/chicken.svg"
import fish from "../../assets/fish.svg"
import chips from "../../assets/chips.svg"
import salads from "../../assets/salads.svg"
import pizza from "../../assets/pizza.svg"
import pasta from "../../assets/pasta.svg"
import lemons from "../../assets/lemons.svg"
import map from "../../assets/Map.svg"

export const Special = () => {
  return (
    <>
    <section className="spec">
      <div className="container">
     <div className="res_wrap">
     <div className="res_top">
     <h2 className="res_tit">Specialities</h2>
     <button className='res_btn'>show all</button>
     </div>
     <div className="spec_bot-wrap">
     <button className="res__btn" >
     
     </button>
     <img src={bagel} alt="foods"  className="spec__img" />
     <img src={burger} alt="foods"  className="spec__img" />
     <img src={chicken} alt="foods"  className="spec__img" />
     <img src={fish} alt="foods"  className="spec__img" />
     <img src={chips} alt="foods"  className="spec__img" />
     <img src={salads} alt="foods"  className="spec__img" />
     <img src={pizza} alt="foods"  className="spec__img" />
     <img src={pasta} alt="foods"  className="spec__img" />

     <button className="res__btn2">
     </button>
     </div>
      <img src={lemons} alt="" className="lemons" width={1440} />
      <img src={map} alt="" className="map" width={1280} height={600} />
     </div>
     </div>
    </section>
    </>
  )
}
