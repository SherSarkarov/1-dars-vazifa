import React from 'react'
import "./Ask.css"
export const Ask = () => {
  return (
    <>
      <section className='ask'>
        <div className="container">
          <div className="wrapper">
            <div className="ask__left">
              <h2 className="ask__title">
                Your nearest restaurants
              </h2>
              <p className="ask__txt">Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
            </div>
            <div className="inf">
              <input type="text" placeholder='Enter delivery address' className='inf__inp' />
              <button className="inf_btn">send</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
