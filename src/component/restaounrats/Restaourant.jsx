import React from 'react'
import "./restaourant.css"
import food from "../../assets/fast.jpg"
import power from "../../assets/botqa.jpg"
import vegan from "../../assets/vegan.jpg"
import spicy from "../../assets/spicy.jpg" 






export const Restaourant = () => {
  return (
    <>
    <section className="restaourants">
      <div className="container">
     <div className="res_wrap">
     <div className="res_top">
     <h2 className="res_tit">Restaurants</h2>
     <button className='res_btn'>show all</button>
     </div>
     <div className="res_bot-wrap">
     <button className="res__btn" >
    
     </button>
     <img src={ food } alt="foods"  className="res__img" />
     <img src={ power } alt="foods"  className="res__img" />
     <img src={ vegan } alt="foods"  className="res__img" />
     <img src={ spicy } alt="foods"  className="res__img" />
     <button className="res__btn2">
     </button>
     </div>
     </div>
     </div>
    </section>
    </>
  )
}
