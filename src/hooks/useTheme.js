// tools
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext must be used in a ThemeContextProvider');
  }

  return context;
}
