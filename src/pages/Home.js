import React from 'react'
import ShoppingNav from "../components/ShoppingNav"

export default function Home() {

    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1 >Welcome to Star Wars Shop </h1>
                <br></br>
            </div>
            <ShoppingNav></ShoppingNav>
        </>
    )
}