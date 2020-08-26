import React, {useState, useContext, useEffect} from 'react'
import {ShoppingContext} from './ShoppingContext'

export const useShoppingContext = () => {
    const [data, setData] = useContext(ShoppingContext)

    const retrieveDetailsTable = async (choice) => {
        let response = await fetch(data.navBarData[choice])
        let info = await response.json()
        let key = Object.keys(info["results"][0])[0]
        setData( prevData => ({
            ...prevData,
             tableData: info,
             choice: choice,
             key: key
        }))
    }

    const addToCart = async (name) => {
        let cart = data.cart
        cart.push(name)
        let cartCount = {...data.cartCount}
        if (cartCount[name] !== undefined) {
            cartCount[name] += 1 
        } else {
            cartCount[name] = 1
        }
        let total = data.total
        total += name.charCodeAt(0) + name.charCodeAt(1)
        setData(
            prevData => ({
                ...prevData,
                cart: cart,
                cartCount: cartCount,
                total: total
            })
        )
    }

    const removeFromCart = async (name) => {
        let cart = data.cart
        let index = cart.indexOf(name)
        if (index !== -1) {
            let total = data.total
            cart.splice(index, 1);
            let cartCount = {...data.cartCount}
            if (cartCount[name] !== undefined && cartCount[name] > 0) {
                cartCount[name] -= 1 
                total -= name.charCodeAt(0) + name.charCodeAt(1)
            }
            setData(
                prevData => ( {
                    ...prevData,
                    cart: cart,
                    cartCount: cartCount,
                    total: total
                    })
            )        
        }
    }
    
    return (
        {   
            data,
            retrieveDetailsTable,
            addToCart,
            removeFromCart
        }
    )
}
