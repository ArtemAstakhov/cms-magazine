import React from 'react';

import { Menu } from "@components/Menu";
import { Routes } from "@components/Routes";
import "./theme.scss";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className={styles.body}>
        <Menu />
        <div className={styles.content}>
          <Routes />
        </div>
      </div>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
