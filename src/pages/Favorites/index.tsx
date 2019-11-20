import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Favorites.module.scss";
import { declOfNum } from "@helpers/declOfNum";
import { Button } from "@ui-kit/Button";
import { useStore } from "@hooks";
import { removeFavorite } from "@actions";

const FavoritesPage: React.FunctionComponent = () => {
  const { favorites } = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        Выбранные компании:
      </h2>
      <table className={styles.table}>
        <tbody>
          {favorites.map((instument, i) => (
            <tr
              key={`row-${i}`}
            >
              <td className={styles.logoCell}>
                {Boolean(instument.image) ? (
                  <div
                    className={styles.logo}
                    style={{
                      backgroundImage: `url(${instument.image})`,
                    }}
                  />
                ) : (
                  <div
                    className={styles.logo}
                  >
                    {instument.firstLettersOfName}
                  </div>
                )}
              </td>
              <td>
                {instument.title}
              </td>
              <td>
                {instument.worksCount} {declOfNum(instument.worksCount, ["проект", "проекта", "проектов"])}
              </td>
              <td>
                {instument.partnersCount} {declOfNum(instument.partnersCount, ["партнер", "партнера", "партнеров"])}
              </td>
              <td>
                {instument.rate}
              </td>
              <td>
                <Button
                  onClick={() => dispatch(removeFavorite(instument.id))}
                  variant="outlined"
                >
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritesPage;
