import React, { useState } from "react";
import styles from "./index.module.scss";
import searchIcon from "./../../images/search.svg";

import Search from "../../store/search";
import { observer } from "mobx-react-lite";

const SearchForm = observer(() => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    Search.addSearchCondition(searchValue);
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className={styles["search-input"]}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className={styles["search-button"]}>
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
});

export default SearchForm;
