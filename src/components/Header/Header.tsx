import React from "react";
import styles from "./index.module.scss";
import logo from "./../../images/logo.png";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <li className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="" />
        <h2 className={styles.statistic}>Statistic</h2>
      </a>
      <SearchForm />
    </li>
  );
};

export default Header;
