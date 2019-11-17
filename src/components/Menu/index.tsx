import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants";
import styles from "./Menu.module.scss";

export const Menu: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          CMS
        </div>
        <div>
          <div>
            magazine
          </div>
          <div>
            Все о digital
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.navigation}>
        <div className={styles.link}>
          Журнал
        </div>
        <div className={styles.link}>
          Агенства
        </div>
        <Link to={ROUTES.instruments} className={styles.link}>
          Инструменты
        </Link>
      </div>

      <div className={styles.divider} />

      <div className={styles.actions}>
        <Link to={ROUTES.favorites} className={styles.link}>
          Избранное
        </Link>
        <div className={styles.link}>
          Поиск
        </div>
        <div className={styles.link}>
          Кабинет агенства
        </div>
      </div>
    </div>
  );
};
