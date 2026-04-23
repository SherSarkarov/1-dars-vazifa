import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/Logo.svg'
import human from "../../assets/person.svg"
import karzinka from '../../assets/cart.svg'
import burger from "../../assets/Button.svg"
import x from "../../assets/iks.svg"
import call from "../../assets/call.svg"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
return (
    <>
    <div className="container">
      <div className="header__wrapper">
        <img src={logo} className="logo" />
        <div className="header_right">
          <a href="#" className="login_link">
            <img src={human} alt="sher" className="login" />
            <p className="login__txt">Log in</p>
          </a>
          <a href="" className="karzina_link">
            <img src={karzinka} className="karzina" />
          </a>
          <button className="burger" onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? x : burger} alt="menu" className="btn__img" />
          </button>
        </div>
      </div>

      <div className={`header__bugr ${isOpen ? "open" : ""}`}>
        <div className="burgr__call">
          <img src={call} alt="" className="call_img" />
          <div className="call__right">
            <a href="tel:0800 111 126">0800 111 126</a>
            <p className="call__bottom">8:00 - 22:00</p>
          </div>
        </div>
        <a href="" className="delivery">Delivery info</a>
        <a href="" className="delivery">About us</a>
        <a href="" className="delivery">Restaurants</a>
        <a href="" className="delivery">Specialities</a>
        <button className="language">English</button>
      </div>
      </div>
    </>
  )
}