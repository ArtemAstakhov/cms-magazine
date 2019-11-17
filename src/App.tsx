import React from 'react';

import { Menu } from "./components/Menu";
import { Routes } from "./components/Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu />
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
