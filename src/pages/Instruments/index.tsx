import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import styles from "./Instruments.module.scss";
import { ReactComponent as StarIcon } from "@images/star.svg";
import { declOfNum } from "@helpers/declOfNum";
import { Instrument } from "@models/instrument";
import HttpService from "@services/http";
import { toggleFavorite } from "@actions";
import { useStore } from "@hooks";

const InstrumentsPage: React.FunctionComponent = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const dispatch = useDispatch();
  const { favorites } = useStore();

  useEffect(() => {
    (async () => {
      const response = await HttpService.get<Instrument[]>(
        "https://api.cmsmagazine.ru/v1/instrumentsList",
        {
          instrument_type_code: "cms",
          page: 1,
        }
      );

      setInstruments(response.data);
    })();
  }, []);

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
          {instruments.map((instument, i) => (
            <tr
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              key={`row-${i}`}
            >
              <td
                className={classNames(styles.favCell, {
                  [styles.activeFav]: favorites.find((f) => f.id === instument.id),
                })}
              >
                {(i === hoveredRow || favorites.find((f) => f.id === instument.id)) && (
                  <StarIcon onClick={() => {
                    dispatch(toggleFavorite(instument));
                  }} />
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
                <div>
                  {instument.title}
                </div>
                {/* <div>
                  {instument.}
                </div> */}
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
