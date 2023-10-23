import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BeerContext } from "../context/beer.context";

function AllBeersPage() {

    const { beers, getBeers } = useContext(BeerContext)

    useEffect(() => {
        
        getBeers()

    }, [])


    return (
        <div>
        <h1>All Beers</h1>

            {
                beers.map((beer) => {

                    return (

                        <>

                            <div className="all">
                                <Link to={`/beers/${beer._id}`}>
                                    <img src={beer.image_url} alt="beer"/>

                                </Link>
                                <div>
                                    <h1>{beer.name}</h1>
                                    <h2>{beer.tagline}</h2>
                                    <p>Contributed by: {beer.contributed_by}</p>

                                </div>
                            </div>

                            <hr />

                        </>
                    )

                })
            }

        </div>
    )
}

export default AllBeersPage;