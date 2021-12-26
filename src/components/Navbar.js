import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='logo'>
          <h2>CookingRecipes</h2>
        </Link>
        <Link to='/create' className='btn'>Create Recipe</Link>
      </nav>
    </div>
  );
}
