// tools
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './SearchBar.css';

export default function SearchBar() {
  const [ search, setSearch ] = useState('');
  const navigate = useNavigate();

  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // redirect the user to searched param
    navigate(`/search?q=${search}`);
  };

  return (
    <form className='search' onSubmit={ handleSubmit }>
      <label>
        <span>Search: </span>
        <input
          type="text"
          onChange={ (e) => setSearch(e.target.value) }
          value={ search }
        />
      </label>
    </form>
  );
}
