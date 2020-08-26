import React, {createContext, useState, useEffect} from 'react'

export const ShoppingContext = createContext()

export const ShoppingContextProvider = (props) => {
    const [data, setData] = useState({
		urlNav: "https://swapi.dev/api/?format=json", 
		navBarData: {},
		tableData: {results:[]},
		choice: "",
		total: 0,
		cart: [],
		cartCount: {},
		key: "name"
	})
	
	useEffect(() => {
        retrieveDetailsNav()
    },[]) 

    const retrieveDetailsNav = async () => {
        console.log("retreiveDetailsNav called")
        let response = await fetch(data.urlNav)
        let info = await response.json()
        setData( prevData => ({
            ...prevData, 
             navBarData: info
        }))
	}
	
	return (
		<ShoppingContext.Provider value={[data, setData]}>
			{props.children}
		</ShoppingContext.Provider>
	)
}