import classnames from "classnames/bind";
import styles from "./Categories.module.scss";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { cateList } from "./menuCate";
import MenuItems from "./MenuItems/MenuItems";

var cx = classnames.bind(styles);

function Categories() {
  var [show, setShow] = useState(false);

  var handleClick = () => {
    setShow(!show);
  };

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [show]);

  return (
    <div className={cx("header-categories")} onClick={handleClick} ref={ref}>
      <span className={cx("header-categories-name")}>Ăn uống</span>
      <span className={cx("header-categories-icon")}></span>
      {show && (
        <div className={cx("header-category")}>
          <div className={cx("category-options")}>
            <FontAwesomeIcon className={cx("category-icon")} icon={faBars} />
            <span className={cx("category-title")}>Select category</span>
          </div>
          <ul className={cx("category-list")}>
            {cateList.map((list, index) => {
              return (
                <MenuItems
                  items={list}
                  key={index}
                  show={show}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Categories;
