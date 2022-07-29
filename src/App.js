import React from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Content from './components/content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MenuContent from './components/MenuContent/MenuContent'
import NewContent from './components/NewContent/NewContent'
import Review from './components/Review/Review'

const App = () => {
  return (
     <>
        <Header />
        <Content />
        <NewContent />
        <MenuContent />
        <AboutUs/>
        <Review />
        <Footer/>
     </>
  )
}

export default App