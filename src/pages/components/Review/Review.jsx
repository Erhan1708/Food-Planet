import React, { useEffect, useState } from "react";
import toast from "react-hot-toast"
import styles from "./Review.module.css";
import pen from "../../../asset/icons/pen.svg";

const Review = () => {
   const [revi, setRevi] = useState([])
   useEffect(() => {
      fetch("http://localhost:3001/review")
         .then(response => {
            if (response.status === 200) {
               return response.json()
            } else {
               toast.error("произошло ошибка при загрузке коментарии")
            }
         })
         .then(data => setRevi(data))
   }, []);
	return (
		<div className={styles.Review}>
			<h2>Отзывы</h2>
			<div className={styles.Review_blocks}>
				{revi.map((post) => (
						<div className={styles.block}>
							<img className={styles.ava} src={post.img} alt="" />
							<h4>
								{post.name} <img src={pen} alt="" />
							</h4>
							<p className={styles.description}>{post.review}</p>
							<p className={styles.date}>{post.date}</p>
						</div>
				))}
			</div>
		</div>
	);
};

export default Review;
