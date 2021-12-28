// tools
import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(themeReducer, {
    color: '#58249c'
  });

  console.log(state);

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <ThemeContext.Provider value={ { ...state, changeColor } }>
      { children }
    </ThemeContext.Provider >
  );
};