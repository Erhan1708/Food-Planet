import React from 'react'
import styles from "./EmptyCart.module.css"
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
     <section className="container">
        <div className="content">
           <div className={styles.content}>
              <div className={styles.emptyCart}>
                 <img src="" alt="empty" />
              </div>
              <div className={styles.emptyCartTitle}>
                 Ой, пусто!
              </div>
              <div className={styles.emptyCartSubTitle}>
                 Ваша корзина пуста, откройте «Меню»
                 и выберите понравившийся товар.
                 Мы доставим ваш заказ от 365 сом
              </div>
              <div className={styles.emptyCartBtn}>
                 <Link to="/">
                    <button className={styles.btn}>
                       Вернуться в меню
                    </button>
                 </Link>
              </div>
           </div>
        </div>
     </section>
  )
}

export default EmptyCart