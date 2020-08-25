import React from "react"
import {useShoppingContext} from '../context/UseShoppingContext'
import styles from "./ShoppingButtons.module.css"

export default function ShoppingButtons({name}) {
    const {data,retrieveDetailsTable, addToCart, removeFromCart} = useShoppingContext()
    let btns = []
    if (name !== data.choice) {
        retrieveDetailsTable(name)
    } 

    btns = data.tableData["results"].map(
        c => 
        <div key={c["name"]}>
            <h3>{c["name"]}</h3>
            <button className={data.cart.includes(c["name"]) ? styles.rmvBtn : styles.disabled} type="button" onClick={() => removeFromCart(c["name"]) }>Remove</button> 
            <button className={styles.addBtn} type="button" onClick={() => addToCart(c["name"]) }>Add</button>
        </div>)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {btns}
            </div>
        </div>
    )
}