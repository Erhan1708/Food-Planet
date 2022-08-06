import React from 'react'
import burger from "../../asset/img/new_menu/burger.svg"
import next from "../../asset/icons/next.svg"
import styles from "./Content.module.css"

const Content = () => {
  return (
		<div className={styles.Container}>
			<div className={styles.Content}>
				<h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
				<p>
					Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен
					всегда горячим и ароматным.
				</p>
				<button>Перейти в меню<img src={next} alt="" /></button>
        </div>
        <img className={styles.burger} src={burger} alt="" />
		</div>
	);
}

export default Content