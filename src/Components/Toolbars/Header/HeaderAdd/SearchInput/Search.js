import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { addList } from "../addList";

var cx = classNames.bind(styles);

function InputSearch() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className={cx("city-search")}>
        <FontAwesomeIcon
          className={cx("city-search-icon")}
          icon={faMagnifyingGlass}
        />
        <input
          value={query}
          placeholder="Tìm tỉnh thành"
          className={cx("city-search-input")}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className={cx("city-list")}>
        {addList
          .filter((list) => {
            return list.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((list, index) => (
            <li className={cx("city-list-item")} key={index}>
              <a className={cx("city-list-item-link")} href={list.code}>
                <label className={cx("city-list-item-name")}>{list.name}</label>
                <span className={cx("city-list-item-amount")}>
                  {list.amount}
                </span>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}

export default InputSearch;
