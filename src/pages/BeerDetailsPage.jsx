import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { BeerContext } from "../context/beer.context";
import BeerCard from "../components/BeerCard";

function BeerDetailsPage() {

    const [beer, setBeer] = useState(null)

    const { beerId } = useParams()

    const { beers } = useContext(BeerContext)

    useEffect(() => {

        if (beers.length) {

            let thisBeer = beers.find((beer) => beer._id === beerId)
            setBeer(thisBeer)
            
        }


    }, [beerId, beers])

    return (
        <div>
            {
                beer && <BeerCard beer={beer} />
            }
        </div>
    )
}

export default BeerDetailsPage;