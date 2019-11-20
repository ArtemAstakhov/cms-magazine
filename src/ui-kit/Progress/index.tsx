import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import styles from "./Progress.module.scss";

const loaderRoot = typeof document !== "undefined" ? document.getElementById("loader-root") : null;

export const ProgressSpinner: React.FunctionComponent = () => {
  const elRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    loaderRoot!.appendChild(elRef.current);

    return () => {
      loaderRoot!.removeChild(elRef.current);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.progressOverlay}>
      <div className={styles.spinner}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.dot}></div>
      </div>
    </div>,
    elRef.current,
  );
};
