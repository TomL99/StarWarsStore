import React from 'react'
import {useShoppingContext} from '../context/UseShoppingContext'
import {Link} from 'react-router-dom'
import styles from './ShoppingNav.module.css'

export default function ShoppingNav() {
    const {data, setChoice} = useShoppingContext()
    
    return(
        <div className={styles.nav}>
            {Object.keys(data.navBarData).map(
                r => <Link key={r} to={`/category/${r}`}>
                        <button className={styles.btn}>{r}</button>
                    </Link> 
            )}
       </div>
    )
}