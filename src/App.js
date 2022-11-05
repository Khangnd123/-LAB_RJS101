import "./App.css";
import React from "react";
import Main from "./components/MainComponent.js";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Main />;
      </HashRouter>
    </Provider>
  );
}

export default App;
