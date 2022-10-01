import React, { useState } from "react";
import { New_Content } from "../../../constants/burger";
import { navBar} from "../../../constants/index";
import styles from "./NewContent.module.css";

const NewContent = () => {
	const [number, setNumber] = useState(0);

   const getProduct = () => {
      console.log("work");
   }

	return (
		<div className={styles.NewContent}>
			<div className={styles.navBar}>
				<h1>Новинки</h1>
				<ul>
					{navBar.map((post) => (
						<li key={post.id}>
							<a href={post.link}>{post.title}</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.menu}>
				{New_Content.map((post) => (
					<div key={post.id} className={styles.product_block}>
						<img src={post.img} alt="" />
						<h2>{post.title}</h2>
						<p className={styles.description}>{post.description}</p>
						<h3>{post.price} сом</h3>
						<p className={styles.amount}>
                     <b onClick={() => { if (number > 1) { setNumber(number - 1) } }}>&minus;</b>
							{number}
                     <b onClick={() => { if (number < 99) { setNumber(number + 1) } }}>+</b>
						</p>
                  <button onClick={getProduct}>В корзину</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewContent;
