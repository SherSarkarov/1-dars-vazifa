import React from 'react'
import "./Inst.css"
import kitchen from "../../assets/kitchen.jpg"
import house from "../../assets/hosukitchen.jpg"
import bro from "../../assets/bratcoockes.jpg"
import vegan from "../../assets/vega.jpg"


export const Inst = () => {
 return (
  <>
   <section className='inst'>
    <div className="container">
     <div className="insta__wrapper">
      <h2 className="inst__title">#YellowKitchens<span className='inst__title-span'> in instagram</span></h2>
      <ul className="inst__img-wrapper">
       <li className="inst_img-item"><img src={kitchen} width={296} height={299} alt="" className="inst__img" /> </li>
       <li className="inst_img-item"><img src={house} width={296} height={299} alt="" className="inst__img" /> </li>
       <li className="inst_img-item"><img src={bro} width={296} height={299} alt="" className="inst__img" /> </li>
       <li className="inst_img-item"><img src={vegan} width={296} height={299} alt="" className="inst__img" /> </li>
      </ul>
     </div>
    </div>
   </section>
  </>
 )
}
