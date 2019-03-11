import React from "react";
import "./App.scss";
import {StoreProvider} from "easy-peasy";
import store from "./store";
import BoardContainer from "./components/BoardContainer";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <BoardContainer />
    </StoreProvider>
  );
};

export default App;
