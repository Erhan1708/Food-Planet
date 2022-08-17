import React from "react";
import {Link} from "react-router-dom"
import iconsFoodPlanet from "../../asset/icons/icons_footer.svg";
import phone from "../../asset/icons/phone-footer.svg"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<a href="/">
				<img className={styles.img} src={iconsFoodPlanet} alt="" />
			</a>
			<div>
				<ul>
               <li>
                  <Link to="/">Главная</Link>
					</li>
               <li>
                  <Link to="/menu">Меню</Link>
					</li>
               <li>
                  <Link to="/delivery">Доставка</Link>
					</li>
               <li>
                  <Link to="/contacts">Контакты</Link>
					</li>
					<li>
						<a href="tel:+996500405988">
							<img src={phone} alt="" /> +996500405988
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
