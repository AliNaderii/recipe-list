// tools
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles & components
import SearchBar from './SearchBar';
import './Navbar.css';

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className='navbar' style={ { backgroundColor: color } }>
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
