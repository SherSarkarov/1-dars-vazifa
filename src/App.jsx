import React from 'react'
import { Header } from './component/header/header'
import { Hero } from './component/Hero/Hero'
import { Restaourant } from './component/restaounrats/restaourant'
import { Ask } from './component/ask/ask'
import { Spec } from './component/Specialities/spec'
import { Inst } from './component/insta/inst'
import { Footer } from './component/Footer/Footer'


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Restaourant/>
    <Ask/>
    <Spec/>
    <Inst/>
    <Footer/>
    </>
  )
}
export default App