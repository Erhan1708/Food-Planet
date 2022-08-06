import React from 'react'
import './App.css'
import AboutUs from './pages/components/AboutUs/AboutUs'
import Content from './pages/content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MenuContent from './pages/components/MenuContent/MenuContent'
import NewContent from './pages/components/NewContent/NewContent'
import Review from './pages/components/Review/Review'

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