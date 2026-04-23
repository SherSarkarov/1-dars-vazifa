import React from 'react'
import { Header } from './component/header/header'
import { Inst } from './component/insta/inst'
import { Hero } from './component/Hero/Hero'
import { Restaourant } from './component/restaounrats/restaourant'
import { Ask } from './component/ask/ask'
import { Footer } from './component/Footer/Footer'
import { Special } from './component/Special/Special'



const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Restaourant/>
    <Ask/>
    <Special/>
    <Inst/>
    <Footer/>
    </>
  )
}
export default App