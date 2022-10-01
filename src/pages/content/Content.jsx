import React from 'react'
import burger from "../../asset/img/new_menu/burger.svg"
import next from "../../asset/icons/next.svg"
import styles from "./Content.module.css"
import NewContent from "../components/NewContent/NewContent"
import MenuContent from "../components/MenuContent/MenuContent"
import AboutUs from '../components/AboutUs/AboutUs'
import Review from "../components/Review/Review"
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom'

const Content = () => {
   return (
     <>
		<div className={styles.Container}>
			<div className={styles.Content}>
				<h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
				<p>
					Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен
					всегда горячим и ароматным.
               </p>
               <Link to="/menu"><button className={styles.btn}>Перейти в меню<img src={next} alt="" /></button></Link>
        </div>
        <img className={styles.burger} src={burger} alt="" />
         </div>
         <NewContent />
         <MenuContent />
         <AboutUs />
         <Review />
         <Footer/>
      </>
	);
}

export default Content