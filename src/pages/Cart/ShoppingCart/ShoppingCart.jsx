import React, { useState, useEffect } from 'react';
import styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
   
   const [food, setFood] = useState([]);
   const [number, setNumber] = useState(1);

   const getProduct = () => {
      const food = JSON.parse(localStorage.getItem('food'));
         setFood(Object.values(food));
   }

   const deleteItem = (data) => { 
      let newFood = food.filter(post => post.id !== data.id ? true : false);
      localStorage.setItem("food", JSON.stringify(newFood))
      setFood(newFood);
      console.log(newFood);
   }

   

   useEffect(getProduct, [food]);

   return (
      <div className={styles.container}>
         <h1>Оформление заказа</h1>
         <div className={styles.item}>
            <div className={styles.head}>
               <div>
                  <div>Наименование</div>
               </div>
               <div>
                  <div>Цена</div>
               </div>
               <div>
                  <div>Количество</div>
               </div>
            </div>
            <div className={styles.content}>
               {food.map(post => (
                  <div className={styles.cartСontents} key={post.id}>
                     <div className={styles.nomination}>
                        <img src={post.img} alt="" />
                        <p>{post.title}</p>
                     </div>
                     <p className={styles.price}>{post.price}</p>
                     <p className={styles.count}>
                        <span onClick={() => { if (number > 1) { setNumber(number - 1) } }}>&minus;</span>
                        {post.count}
                        <span onClick={() => { if (number < 99) { setNumber(number + 1) } }}>+</span>
                        </p>
                     <button onClick={(e) => deleteItem(post)} className={styles.btn}>Удалить</button>
                  </div>
               ))}
            </div>
            <div className={styles.total}>Итого:</div>
         </div>
      </div>
  )
}

export default ShoppingCart