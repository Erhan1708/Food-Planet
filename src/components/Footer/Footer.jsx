import React from "react";
import iconsFoodPlanet from "../../asset/icons/icons_footer.svg";
import phone from "../../asset/icons/phone-footer.svg"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<a href="/"><img className={styles.img} src={iconsFoodPlanet} alt="" /></a>
			<div>
				<ul>
					<li>
						<a href="/">Главная</a>
					</li>
					<li>
						<a href="/menu">Меню </a>
					</li>
					<li>
						<a href="/delivery">Доставка</a>
					</li>
					<li>
						<a href="/contacts">Контакты</a>
					</li>
					<li>
						<a href="/phone"> <img src={phone} alt="" /> +996500405988</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
