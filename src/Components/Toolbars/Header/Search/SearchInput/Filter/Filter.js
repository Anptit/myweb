import classnames from "classnames/bind";
import styles from "./Filter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSliders } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { MenuItems } from "./MenuItems";
import Submit from "./Submit/FilterSubmit";

var cx = classnames.bind(styles);

function Filter({ isLoading, isCheckFocus }) {
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState(MenuItems[0]);
  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref && !ref.current.contains(e.target)) {
        setDisplay(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [display]);

  const handleClick = () => {
    setDisplay(true);
  };

  const handleChange = (e) => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={cx("header-search-filter")} onClick={handleClick} ref={ref}>
      <FontAwesomeIcon
        className={cx("header-search-filter-icon")}
        icon={faSliders}
      />
      <span className={cx("header-search-filter-title")}>Bộ lọc</span>
      {display && (
        <div className={cx("container")}>
          <div className={cx("wrapper")}>
            <ul className={cx("filter-list")}>
              {MenuItems.map((item, index) => (
                <li
                  className={cx(
                    "filter-list-item",
                    `${active === item && "active"}`
                  )}
                  onClick={() => setActive(item)}
                  key={index}
                >
                  <div className={cx("filter-list-item-label")}>
                    <div className={cx("filter-list-item-icon")}>
                      {item.icon}
                    </div>
                    <div className={cx("filter-list-item-title")}>
                      {item.title}
                    </div>
                  </div>
                  <div className={cx("filter-list-item-symbol")}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </li>
              ))}
            </ul>
            <ul className={cx("filter-sublist")}>
              {active.children.map((item, index) => (
                <li className={cx("filter-sublist-menu")} key={index}>
                  <label
                    htmlFor={item.id}
                    className={cx("filter-sublist-menu-title")}
                  >
                    <input
                      id={item.id}
                      className={cx("filter-sublist-menu-checkbox")}
                      type="checkbox"
                      value={isChecked}
                      onChange={handleChange}
                    />
                    {item.title}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <Submit />
        </div>
      )}
    </div>
  );
}

export default Filter;
