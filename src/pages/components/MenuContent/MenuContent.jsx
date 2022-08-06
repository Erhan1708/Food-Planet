import React, { useState } from "react";
import styles from "./MenuContent.module.css";
import { menu_Pizza, nawBar } from "../../../constants/index";

const MenuContent = () => {
	const [number, setNumber] = useState(0);

	return (
		<div className={styles.MenuContent}>
			<div className={styles.navBar}>
				<h1>Меню</h1>
				<ul>
					{nawBar.map((post) => (
						<li>
							<a href={post.link}>{post.title}</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.Content}>
				<div className={styles.filter}>
					<p>Сортировать по:</p>
					<select name="" id="">
						<option value="">По умолчанию</option>
						<option value="">选择</option>
						<option value="">选择</option>
					</select>
				</div>
				<div className={styles.menu}>
					{menu_Pizza.map((post) => (
						<div className={styles.product_block}>
							<img src={post.img} alt="" />
							<h2>{post.title}</h2>
							<p className={styles.description}>{post.description}</p>
							<h3>{post.price} сом</h3>
							<p className={styles.amount}>
								<b onClick={() => setNumber(number - 1)}>&minus;</b>
								{number}
								<b onClick={() => setNumber(number + 1)}>+</b>
							</p>
							<button>В корзину</button>
						</div>
					))}
					<button className={styles.btn}>Показать еще</button>
				</div>
			</div>
		</div>
	);
};

export default MenuContent;
