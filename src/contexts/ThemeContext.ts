import * as React from "react";

export enum Theme {
  Light,
  Dark
}

export type ThemeContextProps = { theme: number; toggleTheme?: () => void };
const ThemeContext = React.createContext<ThemeContextProps>({
  theme: Theme.Light
});

export default ThemeContext;
