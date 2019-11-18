/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ROUTES } from "@constants";
import styles from "./Menu.module.scss";
import { ReactComponent as StarIcon } from "@images/star.svg";
import { ReactComponent as SearchIcon } from "@images/search.svg";
import { ReactComponent as EnterIcon } from "@images/enter.svg";

export const Menu: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logoContainer}>
        <div className={styles.logo}>
          CMS
        </div>
        <div>
          <div className={styles.logoTitle}>
            magazine
          </div>
          <div className={styles.logoDescription}>
            Все о digital
          </div>
        </div>
      </Link>

      <div className={styles.divider} />

      <div className={styles.navigation}>
        <div className={styles.link}>
          <span>
            Журнал
          </span>
        </div>
        <div className={styles.link}>
          <span>
            Агенства
          </span>
        </div>
        <NavLink
          to={ROUTES.instruments}
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          <span>
            Инструменты
          </span>
        </NavLink>
      </div>

      <div className={styles.divider} />

      <div className={styles.actions}>
        <NavLink to={ROUTES.favorites} className={styles.link} activeClassName={styles.linkActive}>
          <span>
            <StarIcon />
            Избранное
          </span>
        </NavLink>
        <div className={styles.link}>
          <span>
            <SearchIcon />
            Поиск
          </span>
        </div>
        <div className={styles.link}>
          <span>
            <EnterIcon />
            Кабинет агенства
          </span>
        </div>
      </div>
    </div>
  );
};
