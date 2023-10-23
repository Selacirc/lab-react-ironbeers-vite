import HomeIcon from '../assets/home-icon.png'
import { Link } from 'react-router-dom';

function Navbar() {
    

    return (
        <nav>

            <Link to='/'>
                <img src={HomeIcon} alt='homr' />
            </Link>
            
        </nav>
    )
}

export default Navbar;