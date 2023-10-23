import { Link } from "react-router-dom";
import AllBeers from '../assets/beers.png'
import RandomBeer from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'


function HomePage() {
    return (
        <div id='home'>


            <Link to='/beers' className="home-links" id="all-beers-link">

                <img src={AllBeers} alt="all" />

                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium. Purus in massa tempor nec feugiat nisl.</p>
                
            </Link>

            <Link to='/random-beer' className="home-links" id="random-beers-link">

                <img src={RandomBeer} alt='random' />

                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec. Cursus euismod quis viverra nibh cras.</p>

            </Link>

            <Link to='/new-beer' className="home-links" id='add-beer-link'>

                <img src={NewBeer} alt='new' />

                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique. Velit laoreet id donec ultrices tincidunt.</p>

            </Link>



        </div>
    )
}

export default HomePage;