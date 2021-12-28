// tools
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

// styles && other assets
import './ThemeSelector.css';
import Sun from '../assets/sun.svg';

// colors for navbar background
const themeColors = [ '#58249c', '#249c6b', '#b70233' ];

export default function ThemeSelector() {
  // context custom hook values
  const { changeColor, changeTheme } = useTheme();
  // initial theme state
  const [ theme, setTheme ] = useState('dark');

  // changing the theme state on click
  const handleTheme = () => {
    changeTheme(theme);
    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <div className='theme-container'>
      <div className='theme-selector'>
        <img
          src={ Sun }
          alt="theme-selector-icon"
          onClick={ handleTheme }
          className={ `sun ${theme}` }
        />
      </div>
      <ul className='color-selector'>
        { themeColors.map(color => (
          <li key={ color }>
            <div
              style={ { backgroundColor: color } }
              onClick={ () => changeColor(color) }
            />
          </li>
        )) }
      </ul>
    </div>
  );
}
