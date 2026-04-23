import React from 'react'
import { Header } from './component/Header/Header'
import { Inst } from './component/Insta/Inst'
import { Hero } from './component/Hero/Hero'
import { Restaourant } from './component/Restaounrats/Restaourant'
import { Ask } from './component/Ask/Ask'
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