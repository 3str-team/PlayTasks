import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Table.module.scss";

const Table = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className={styles.table}>
      {width >= 760 ? (
        <div className={styles.headRow}>
          <div className={styles.headCell}>Номер</div>
          <div className={styles.headCell}>Категория</div>
          <div className={styles.headCell}>Название</div>
        </div>
      ) : (
        ""
      )}
      {data.map(({ id, taskId, theme, title }) => {
        return (
          <Link
            key={id}
            className={width >= 760 ? styles.row : styles.card}
            to={"/tasks/" + taskId}
          >
            <div className={styles.cell}>{taskId}</div>
            <div className={styles.cell}>{theme}</div>
            <div className={styles.cell}>{title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Table;
