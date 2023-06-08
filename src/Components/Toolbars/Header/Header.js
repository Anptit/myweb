import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faBell,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./HeaderAdd/Address";
import Categories from "./HeaderCate/Categories";
import Search from "./Search/Search";

var cx = classnames.bind(styles);

function Header() {
    return ( 
        <div className={cx("header-background")}>
          <div className={cx("header")}>
            <a
              href="/"
              className={cx("logo")}
            >
              <img
                src="https://www.foody.vn/style/images/logo/foody-vn.png"
                alt="Foody"
              />
            </a>
            <Address />
            <Categories />
            <Search />
            <div className={cx("header-menu")}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={cx("header-app")}>
              <FontAwesomeIcon icon={faMobileScreenButton} />
              <a className={cx("header-app-title")} href="/">Apps</a>
            </div>
            <div className={cx("header-place")}>
              <div className={cx("header-place-login")}>Đăng nhập</div>
              <div className={cx("header-place-noti")}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className={cx("header-place-options")}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className={cx("header-place-languages")}>
                <img
                className={cx("header-place-languages-icon")}
                  src="https://www.foody.vn/style/images/icons/lang/vn.png"
                  alt="VN"
                />
              </div>
            </div>
          </div>
        </div>
     );
}

export default Header;