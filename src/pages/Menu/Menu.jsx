import React from 'react'
import { NavLink } from "react-router-dom"
import { navBar } from "../../constants/index"
import styles from "./Menu.module.css"
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
        <div className={styles.navBar}>
				<h1>Меню</h1>
				<ul>
					{navBar.map((post) => (
                  <li>
                     <NavLink to={post.link}>{post.title}</NavLink>
						</li>
					))}
				</ul>
			</div>
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