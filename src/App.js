import React from "react";
import Routes from "route";
import { AppProvider } from "components/AppProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
