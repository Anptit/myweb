import styles from "./Address.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import InputSearch from "./SearchInput/Search";
import Inf from "./AddInf/AddInf";

var cx = classNames.bind(styles);

function Address() {
  var [show, setShow] = useState(false);

  var handleClick = (e) => {
    setShow(!show);
  };

  return (
    <div className={cx("header-address")}>
      <div className={cx("wrapper")} onClick={handleClick}>
        <span className={cx("header-address-name")}>Hà Nội</span>
        <span className={cx("header-address-icon")}></span>
      </div>
      {show && (
        <div className={cx("header-address-list")}>
          <div className={cx("city")}>
            <FontAwesomeIcon
              className={cx("city-icon")}
              icon={faEarthAmerica}
            />
            <span className={cx("city-title")}>Tỉnh thành</span>
          </div>
          <InputSearch />
          <Inf />
        </div>
      )}
    </div>
  );
}

export default Address;
