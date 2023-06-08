import styles from "./AddInf.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCamera,
  faComment,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

var cx = classNames.bind(styles);

function Inf() {
    return ( 
        <div className={cx("inf")}>
            <a href="/o-dau" className={cx("inf-item")}>
              <FontAwesomeIcon
                className={cx("inf-item-icon")}
                icon={faLocationDot}
              />
              <span className={cx("inf-item-title")}>334k</span>
            </a>
            <a href="/binh-luan" className={cx("inf-item")}>
              <FontAwesomeIcon
                className={cx("inf-item-icon")}
                icon={faComment}
              />
              <span className={cx("inf-item-title")}>1M</span>
            </a>
            <a href="hinh-anh" className={cx("inf-item")}>
              <FontAwesomeIcon
                className={cx("inf-item-icon")}
                icon={faCamera}
              />
              <span className={cx("inf-item-title")}>10M</span>
            </a>
            <a href="/bo-suu-tap" className={cx("inf-item")}>
              <FontAwesomeIcon
                className={cx("inf-item-icon")}
                icon={faBookmark}
              />
              <span className={cx("inf-item-title")}>25M</span>
            </a>
          </div>
     );
}

export default Inf;