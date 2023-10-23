import { useEffect, useState, useContext } from "react";
import { BeerContext } from "../context/beer.context";
import BeerCard from "../components/BeerCard";

function RandomBeersPage() {

    const [beer, setBeer] = useState(null)

    const { beers } = useContext(BeerContext)

    useEffect(() => {

        if (beers.length) {

            let thisBeer = beers[Math.floor(Math.random() * beers.length)]
            setBeer(thisBeer)
            
        }


    }, [beers])
    return (
        <div>
            {
                beer && <BeerCard beer={beer} />
            }
        </div>
    )
}

export default RandomBeersPage;