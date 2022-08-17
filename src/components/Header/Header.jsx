import React from "react";
import iconsFoodPlanet from "../../asset/icons/icon-food-planet.svg";
import phone from "../../asset/icons/phone.svg"
import basket from "../../asset/icons/basket.svg"
import styles from "./Header.module.css"
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
   const setActive = ({ isActive }) => (isActive ? styles.active : "");
   return (
			<>
				<header className={styles.Header}>
					<NavLink to="/">
						<img className={styles.img} src={iconsFoodPlanet} alt="" />
					</NavLink>
					<div>
						<ul>
							<li>
								<NavLink className={setActive} to="/">
									Главная
								</NavLink>
							</li>
							<li>
								<NavLink className={setActive} to="/menu">
									Меню
								</NavLink>
							</li>
							<li>
								<NavLink className={setActive} to="/delivery">
									Доставка
								</NavLink>
							</li>
							<li>
								<NavLink className={setActive} to="/contacts">
									Контакты
								</NavLink>
							</li>
							<li>
								<a href="tel:+996500405988">
									<img src={phone} alt="" />
									+996500405988
								</a>
							</li>
							<li>
								<NavLink className={setActive} to="/basket">
									<img src={basket} alt="" />
									<b>0</b>
								</NavLink>
							</li>
						</ul>
					</div>
				</header>
				<Outlet />
			</>
		);
};

export default Header;
