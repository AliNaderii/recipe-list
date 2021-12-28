// tools
import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// context.provider component
export const ThemeContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(themeReducer, {
    color: '#58249c',
    theme: 'light'
  });

  console.log(state);

  // function for changing navbar background color
  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  // function for changing dark and light theme
  const changeTheme = (theme) => {
    dispatch({ type: 'CHANGE_THEME', payload: theme });
  };

  return (
    <ThemeContext.Provider value={ { ...state, changeColor, changeTheme } }>
      { children }
    </ThemeContext.Provider >
  );
};