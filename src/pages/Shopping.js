import React from 'react'
import ShoppingCart from "../components/ShoppingCart"
import ShoppingNav from "../components/ShoppingNav"
import ShoppingButtons from "../components/ShoppingButtons"

export default function Shopping({match}) {
    let name = match.params.name
    return (
        <div>
            <ShoppingCart></ShoppingCart>
            <br></br>
            <ShoppingNav></ShoppingNav>
            <br></br>
            <ShoppingButtons name={name}></ShoppingButtons>
        </div>
    )
}