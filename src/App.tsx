import React, { useRef, useEffect, useState } from 'react';

import { Menu } from "@components/Menu";
import { Routes } from "@components/Routes";
import "./theme.scss";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const [minContentHeight, setMinContentHeight] = useState<number>();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      setMinContentHeight(menuRef.current.offsetHeight);
    }
  }, [menuRef.current])

  return (
    <div className="App">
      <div className={styles.body}>
        <Menu ref={menuRef} />
        <div
          className={styles.content}
          style={{
            minHeight: minContentHeight,
          }}
        >
          <Routes />
        </div>
      </div>
      <footer
        className={styles.footer}
      >
        Footer
      </footer>
    </div>
  );
}

export default App;
