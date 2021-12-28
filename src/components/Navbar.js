// tools
import { Link } from 'react-router-dom';

// styles & components
import SearchBar from './SearchBar';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <Link to='/' >
            <h2>CookingRecipes</h2>
          </Link>
        </div>
        <div className='searchbar'>
          <SearchBar />
          <Link to='/create' className='btn'>Create Recipe</Link>
        </div>
      </nav>
    </div>
  );
}
