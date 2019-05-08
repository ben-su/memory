import { StoreProvider } from "easy-peasy";
import React, { useState } from "react";
import BoardContainer from "./components/BoardContainer/BoardContainer";
import ThemeContext, { Theme } from "./contexts/ThemeContext";
import "./scss/App.scss";
import store from "./store";

const App: React.FC = () => {
  const [theme, setTheme] = useState(Theme.Light);
  const toggleTheme = () =>
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StoreProvider store={store}>
        <BoardContainer />
      </StoreProvider>
    </ThemeContext.Provider>
  );
};

export default App;
