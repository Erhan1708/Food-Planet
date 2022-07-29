import React from "react";
import { Review_aboutUs } from "../../constants";
import styles from "./Review.module.css";
import pen from "../../asset/icons/pen.svg";

const Review = () => {
	return (
		<div className={styles.Review}>
			<h2>Отзывы</h2>
			<div className={styles.Review_blocks}>
				{Review_aboutUs.map((post) => (
						<div className={styles.block}>
							<img src={post.img} alt="" />
							<h4>
								{post.name} <img src={pen} alt="" />
							</h4>
							<p className={styles.description}>{post.description}</p>
							<p className={styles.date}>{post.date}</p>
						</div>
				))}
			</div>
		</div>
	);
};

export default Review;
