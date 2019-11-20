import React, { useRef, useEffect, useState } from 'react';

import { Menu } from "@components/Menu";
import { Routes } from "@components/Routes";
import { ProgressSpinner } from "@ui-kit/Progress";
import { useStore } from "@hooks";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const [minContentHeight, setMinContentHeight] = useState<number>();
  const menuRef = useRef<HTMLDivElement>(null);
  const { isFetching } = useStore();

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

      {isFetching && (
        <ProgressSpinner/>
      )}
    </div>
  );
}

export default App;
