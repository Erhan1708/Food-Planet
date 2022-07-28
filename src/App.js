import React from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Content from './components/content/Content'
import Header from './components/Header/Header'
import MenuContent from './components/MenuContent/MenuContent'
import NewContent from './components/NewContent/NewContent'

const App = () => {
  return (
     <>
        <Header />
        <Content />
        <NewContent />
        <MenuContent />
        <AboutUs/>
     </>
  )
}

export default App