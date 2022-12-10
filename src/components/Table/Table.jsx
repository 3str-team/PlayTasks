import React from "react";
import { Link } from "react-router-dom";

import styles from "./Table.module.scss";

const Table = ({ data }) => {
  return (
    <div className={styles.table}>
      <div className={styles.headRow}>
        <div className={styles.headCell}>Номер</div>
        <div className={styles.headCell}>Категория</div>
        <div className={styles.headCell}>Название</div>
      </div>

      {data.map(({ id, taskId, theme, title }) => {
        return (
          <Link key={id} className={styles.row} to={"/tasks/" + taskId}>
            <div className={styles.cell}>{taskId}</div>
            <div className={styles.cell}>{theme}</div>
            <div className={styles.cell}>{title}</div>
          </Link>
        );
      })}
      {!data.length ? (
        <div className={styles.notFound}>Ничего не найдено</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
