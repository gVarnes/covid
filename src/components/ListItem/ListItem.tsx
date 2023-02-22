import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

interface ListItemProps {
  isBlue?: boolean;
  number: number | string;
  Country: string;
  TotalConfirmed: number | string;
}

const ListItem: React.FC<ListItemProps> = ({ isBlue, TotalConfirmed,Country,number }) => {
  return (
    <div
      className={classNames(styles["list-item"], isBlue ? styles.blue : null)}
    >
      <div className={styles.number}>{number}</div>
      <div className={styles.country}>{Country}</div>
      <div className={styles.total}>{TotalConfirmed}</div>
    </div>
  );
};

export default ListItem;
