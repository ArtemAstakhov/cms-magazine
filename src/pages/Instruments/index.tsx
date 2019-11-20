import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Instruments.module.scss";
import { ReactComponent as StarIcon } from "@images/star.svg";
import { declOfNum } from "@helpers/declOfNum";
import { Instrument } from "@models/instrument";
import HttpService from "@services/http";
import { toggleFavorite, setFetching } from "@actions";
import { useStore } from "@hooks";
import { Checkbox } from "@ui-kit/Checkbox";

type Sort = "partners_count" | "works_count" | "rate";
type SortDirection = "asc" | "desc";

const InstrumentsPage: React.FunctionComponent = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [sort, setSort] = useState<Sort>("partners_count");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [page, setPage] = useState(1);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const dispatch = useDispatch();
  const { favorites } = useStore();

  useEffect(() => {
    fetchInstruments();
  }, []);

  useEffect(() => {
    fetchInstruments();
  }, [sortDirection, sort, page]);

  async function fetchInstruments() {
    try {
      dispatch(setFetching(true));

      const response = await HttpService.get<Instrument[]>(
        "https://api.cmsmagazine.ru/v1/instrumentsList",
        {
          instrument_type_code: "cms",
          page,
          sort_direction: sortDirection,
          sort,
        }
      );

      setInstruments([...instruments, ...response.data]);
    } finally {
      dispatch(setFetching(false));
    }
  }

  function handleSortChange(newSort: Sort) {
    setInstruments([]);
    setPage(1);

    if (newSort !== sort) {
      setSort(newSort);
      setSortDirection("desc");
    } else {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortDirection("asc");
      }
    }
  }

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
              <span
                className={classNames(styles.sortableHeading, {
                  [styles.tableHeadingActiveSort]: sort === "works_count",
                  [styles.descSort]: sortDirection === "desc",
                })}
                onClick={() => handleSortChange("works_count")}
              >
                Проекты
              </span>
            </th>
            <th>
              <span
                className={classNames(styles.sortableHeading, {
                  [styles.tableHeadingActiveSort]: sort === "partners_count",
                  [styles.descSort]: sortDirection === "desc",
                })}
                onClick={() => handleSortChange("partners_count")}
              >
                Партнеры
              </span>
            </th>
            <th>
              <span
                className={classNames(styles.sortableHeading, {
                  [styles.tableHeadingActiveSort]: sort === "rate",
                  [styles.descSort]: sortDirection === "desc",
                })}
                onClick={() => handleSortChange("rate")}
              >
                Оценка пользователей
              </span>
            </th>
            <th>
              Сравнить
            </th>
          </tr>
        </thead>

        <tbody>
          {instruments.map((instument, i) => {
            const isInFaves = Boolean(favorites.find((f) => f.id === instument.id));

            return (
              <tr
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                key={`row-${i}`}
              >
                <td
                  className={classNames(styles.favCell, {
                    [styles.activeFav]: isInFaves,
                  })}
                >
                  {(i === hoveredRow || isInFaves) && (
                    <StarIcon onClick={() => {
                      dispatch(toggleFavorite(instument));
                    }} />
                  )}
                </td>
                <td>
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
                  <Link to={`/instrument/${instument.code}`} className={styles.title}>
                    {instument.title}
                  </Link>
                  {(instument.isSponsor === 1) && (
                    <div className={styles.sponsorLink}>
                      <a href={instument.url} target="_blank" rel="noopener noreferrer">
                        {instument.shortUrl}
                      </a>
                    </div>
                  )}
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
                  <Checkbox
                    value="qq"
                    checked={isInFaves}
                    onChange={() => dispatch(toggleFavorite(instument))}
                  />

                  {(instument.isSponsor === 1) && (
                    <span className={styles.sponsorLabel}>
                      Спонсор
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div
        className={styles.showMore}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Показать еще
      </div>
    </div>
  );
}

export default InstrumentsPage;
