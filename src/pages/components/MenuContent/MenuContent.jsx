import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./MenuContent.module.css";
import { navBar } from "../../../constants/index";
import { NavLink } from "react-router-dom";

const MenuContent = () => {
   const [number, setNumber] = useState(1);
   const [menu, setMenu] = useState([])

   useEffect(() => {
      fetch("http://localhost:3001/pizza")
         .then(response => {
            if (response.status === 200) {
              return response.json()
            } else {
               toast.error("ошибка сервера")
            }
         })
      .then(data => setMenu(data))
   },[])

	return (
		<div className={styles.MenuContent}>
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
					{menu.map((post) => (
						<div className={styles.product_block}>
							<img src={post.img} alt="" />
							<h2>{post.title}</h2>
							<p className={styles.description}>{post.description}</p>
							<h3>{post.price} сом</h3>
							<p className={styles.amount}>
								<b onClick={() => {if(number > 1){setNumber(number-1)}}}>&minus;</b>
								{number}
								<b onClick={() => {if(number < 99){setNumber(number+1)}}}>+</b>
							</p>
							<button>В корзину</button>
						</div>
					))}
            </div>
            <div className={styles.more}>
               <button >Показать еще</button>
            </div>
			</div>
		</div>
	);
};

export default MenuContent;
