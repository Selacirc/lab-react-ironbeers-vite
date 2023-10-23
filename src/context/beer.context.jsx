import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BeerContext = createContext()

const BeerProvider = ({children}) => {

    const [beers, setBeers] = useState([])

    const getBeers = () => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            console.log("Beers ===>", response.data)
            setBeers(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }

    useEffect(() => {

        getBeers()

    }, [])

    
    return (
        <BeerContext.Provider value={{ beers, getBeers }}>
            {children}
        </BeerContext.Provider>
    )
}

export { BeerContext, BeerProvider }