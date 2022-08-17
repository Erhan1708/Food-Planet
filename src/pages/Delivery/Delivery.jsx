import React from 'react'
import toast from "react-hot-toast";
import styles from "./Delivery.module.css"
import image from "../../asset/img/delivery/devilery_image.png"
import imageTree from  "../../asset/img/delivery/del1.png"
const Delivery = () => {
   const text = () => {
			toast.success("успешно!");
		};
  return (
		<div>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.block}>
						<div>
							<h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
							<button onClick={() => text}>Оформить доставку</button>
						</div>

						<div className={styles.image}>
							<img className={styles.image_img} src={image} alt="" />
						</div>
					</div>
					<div className={styles.del}>
						<div className={styles.how_work}>
							<h2>Как работает доставка</h2>
							<div>
								<span>1</span>
								<img
									src="https://nambafood.kg/new_design/static/img/icons/icon-pc.svg?1660044311"
									alt=""
								/>
								<p>НЕСКОЛЬКО КЛИКОВ И ЗАКАЗ ГОТОВ</p>
							</div>

							<div>
								<span>2</span>
								<img
									src="https://nambafood.kg/new_design/static/img/icons/icon-support.svg?1660044311"
									alt=""
								/>
								<p>ОПЕРАТОР ПОДТВЕРДИТ ЗАКАЗ</p>
							</div>

							<div>
								<span>3</span>
								<img
									src="https://nambafood.kg/new_design/static/img/icons/icon-cafe.svg?1660044311"
									alt=""
								/>
								<p>ЗАВЕДЕНИЕ ПРИГОТОВИТ ЗАКАЗ</p>
							</div>

							<div>
								<span>3</span>
								<img
									src="https://nambafood.kg/new_design/static/img/icons/icon-moto.svg?1660044311"
									alt=""
								/>
								<p>КУРЬЕР ЗАБИРАЕТ ЗАКАЗ</p>
							</div>

							<div>
								<span>4</span>
								<img
									src="https://nambafood.kg/new_design/static/img/icons/icon-motoride.svg?1660044311"
									alt=""
								/>
								<p>КУРЬЕР ДОСТАВЛЯЕТ ЗАКАЗ</p>
							</div>

							<div>
								<span>5</span>
								<img
									src="https://nambafood.kg/new_design/static/img/icons/icon-home.svg?1660044311"
									alt=""
								/>
								<p>ПОЛУЧЕНИЕ И ОПЛАТА ЗАКАЗА</p>
							</div>
						</div>

						<h2>Доставка в самые короткие сроки</h2>
						<img className={styles.imageTree} src={imageTree} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Delivery