import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Instruments.module.scss";
import { ReactComponent as StarIcon } from "@images/star.svg";

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

const declOfNum = (count: number, titles: string[]) => {
  if (count < 0) {
    throw new Error("Incorrect value");
  }

  const cases = [2, 0, 1, 1, 1, 2];

  return titles[(count % 100 > 4 && count % 100 < 20)? 2 : cases[(count % 10 < 5) ? count % 10 :5]];  
};

const faves: number[] = [];
const addToFaves = (id: number) => {
  const current = faves.indexOf(id);

  if (current !== -1) {
    faves.splice(current, 1);
  } else {
    faves.push(id);
  }
}

const InstrumentsPage: React.FunctionComponent = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th />
            <th />
            <th>
              Название
            </th>
            <th>
              Проекты
            </th>
            <th>
              Партнеры
            </th>
            <th>
              Оценка пользователей
            </th>
            <th>
              Сравнить
            </th>
          </tr>
        </thead>

        <tbody>
          {array.map((instument, i) => (
            <tr
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              key={`row-${i}`}
            >
              <td
                className={classNames(styles.favCell, {
                  [styles.activeFav]: faves.includes(instument.id),
                })}
              >
                {(i === hoveredRow || faves.includes(instument.id)) && (
                  <StarIcon onClick={() => addToFaves(instument.id)} />
                )}
              </td>
              <td>
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
                check
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InstrumentsPage;
