import React from "react"
import {useShoppingContext} from '../context/UseShoppingContext'
import styles from './ShoppingCart.module.css'

export default function ShoppingCart() {
    const {data, retrieveDetailsNav} = useShoppingContext()
    let table = Object.keys(data.cartCount).map(item => {
            if (data.cartCount[item] > 0) {
                return (<p key={item}><b>{item}</b> Count: {data.cartCount[item]}</p> )
            }
        }
    )
    
    return (
        <>
            <h1 className={styles.total}>Total: ${data.total}</h1>
            <div className={styles.cart}>
                {table}
            </div>
        </>
    )
}
