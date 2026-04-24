import React from 'react'
import { Header } from './component/header/Header'
import { Hero } from './component/Hero/Hero'
import { Restaourant } from './component/restaounrats/Restaourant'
import { Ask } from './component/Ask/Ask'
import { Special } from './component/Special/Special'
import { Inst } from './component/insta/Inst'
import { Footer } from './component/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Restaourant />
      <Ask />
      <Special />
      <Inst />
      <Footer />
    </>
  )
}

export default App