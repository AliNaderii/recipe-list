// tools
import { useTheme } from '../hooks/useTheme';

// styles
import './ThemeSelector.css';
import Sun from '../assets/sun.svg';

const themeColors = [ '#58249c', '#249c6b', '#b70233' ];

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  const handleClick = (color) => {
    changeColor(color);
  };

  return (
    <div className='theme-container'>
      <div className='theme-selector'>
        <img src={ Sun } alt="theme-selector-icon" />
      </div>
      <ul className='color-selector'>
        { themeColors.map(color => (
          <li key={ color }>
            <div
              style={ { backgroundColor: color } }
              onClick={ () => handleClick(color) }
            />
          </li>
        )) }
      </ul>
    </div>
  );
}
