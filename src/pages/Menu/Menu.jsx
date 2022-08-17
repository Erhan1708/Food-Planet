import React from 'react'
import Beverages from './components/Beverages/Beverages'
import Burger from './components/Burger/Burger'
import Desserts from './components/Desserts/Desserts'
import Pizza from "./components/Pizza/Pizza"
import Rolls from './components/Rolls/Rolls'
import Sushi from "./components/Sushi/Sushi"
import Salads from "./components/Salads/Salads"

const Menu = () => {
  return (
     <div>
        <Pizza />
        <Burger />
        <Sushi />
        <Rolls />
        <Salads />
        <Desserts />
        <Beverages />
    </div>
  )
}

export default Menu