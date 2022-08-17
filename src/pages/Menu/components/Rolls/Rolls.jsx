import React, { useState, useEffect } from 'react'
import styles from "./Rolls.module.css"

const Rolls = () => {
 const [pizza, setPizza] = useState([]);
 const [number, setNumber] = useState(1);
 useEffect(() => {
		fetch("http://localhost:3001/rolls")
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					return res.json();
				}
			})
			.then((data) => {
				setPizza(data);
			});
 }, []);

 return (
		<div>
			{pizza.map((post) => (
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
		</div>
 );
}

export default Rolls