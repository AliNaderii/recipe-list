// styles
import './ThemeSelector.css';
import Sun from '../assets/sun.svg';

const themeColors = [ '#58249c', '#249c6b', '#b70233' ];

export default function ThemeSelector() {

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
            />
          </li>
        )) }
      </ul>
    </div>
  );
}
