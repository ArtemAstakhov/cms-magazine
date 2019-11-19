import React from "react";

import styles from "./Favorites.module.scss";
import { declOfNum } from "@helpers/declOfNum";
import { Button } from "@ui-kit/Button";

const array = [
  {
    code: "bitrix",
    firstLettersOfName: "1С",
    id: 56,
    image: "https://images.cmsmagazine.ru/img_out/catalog_cms/upload7vu33x1i85.png",
    partnersCount: 2174,
    rate: 4.3,
    shortUrl: "1c-bitrix.ru",
    title: "1С-Битрикс",
    url: "http://www.1c-bitrix.ru/",
    worksCount: 34857,
  },
  {
    code: "wordpress",
    firstLettersOfName: "WO",
    id: 121,
    image: "https://images.cmsmagazine.ru/img_out/catalog_cms/uploadg5c0Ub.png",
    partnersCount: 1741,
    rate: 4.5,
    shortUrl: "wordpress.org",
    title: "WordPress",
    url: "http://www.wordpress.org/",
    worksCount: 14194,
  },
  {
    code: "joomla",
    firstLettersOfName: "JO",
    id: 115,
    image: "https://images.cmsmagazine.ru/img_out/catalog_cms/uploadJbAIHH.jpg",
    partnersCount: 1005,
    rate: 4.5,
    shortUrl: "joomla.org",
    title: "Joomla!",
    url: "http://www.joomla.org/",
    worksCount: 8896,
  }
];

const FavoritesPage: React.FunctionComponent = () => {
  return (
    <div>
      <h2>
        Выбранные компании:
      </h2>
      <table className={styles.table}>
        <tbody>
          {array.map((instument, i) => (
            <tr
              key={`row-${i}`}
            >
              <td className={styles.logoCell}>
                <div
                  className={styles.logo}
                  style={{
                    backgroundImage: `url(${instument.image})`,
                  }}
                />
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
                  onClick={() => null}
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
