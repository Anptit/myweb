import classnames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { List } from "./MenuItems";
import Filter from "./SearchInput/Filter/Filter";

var cx = classnames.bind(styles);

function Search() {
  const [value, setValue] = useState("");
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const handleFocus = () => {
    setHideSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={cx("header-search")}>
      <div className={cx("header-search-input-filter")}>
        <input
          type="search"
          className={cx("header-search-input")}
          placeholder="Địa điểm, món ăn, loại hình..."
          value={value}
          onChange={handleSearchInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Filter />
        <ul className={cx("suggestions", `${hideSuggestions && "hidden"}`)}>
          {value !== "" &&
            List.data
              .filter((item) => {
                return item.name.toLowerCase().includes(value.toLowerCase());
              })
              .map((item) => (
                <li className={cx("suggestion")} key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
        </ul>
      </div>
      <button className={cx("header-search-submit")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
