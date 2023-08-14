import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg"
import styles from "./Search.module.css"

const Search = ({ placeholder, data }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
