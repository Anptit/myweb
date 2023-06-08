import classnames from "classnames/bind";
import styles from "./MenuItems.module.scss";
import SubMenuItems from "../SubMenuItems/SubMenuItems";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

var cx = classnames.bind(styles);

function MenuItems({ items, show }) {
  var [show2, setShow2] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setShow2(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setShow2(false);
  };

  return (
    <li
      className={cx("category-list-item")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.children && show ? (
        <>
          <a className={cx("category-list-item-link")} href={items.link}>
            <span className={cx("category-list-item-name")}>{items.name}</span>
            <span className={cx("category-list-item-icon")}>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </a>

          <SubMenuItems subitems={items.children} show={show2} />
        </>
      ) : (
        <a className={cx("category-list-item-link")} href={items.link}>
          <span className={cx("category-list-item-name")}>{items.name}</span>
          <span className={cx("category-list-item-icon")}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </a>
      )}
    </li>
  );
}

export default MenuItems;
