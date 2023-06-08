import classnames from "classnames/bind";
import styles from "./ToolbarsTop.module.scss";

var cx = classnames.bind(styles);

function ToolbarsTop() {
  return (
    <div className={cx("toolbars-top")}>
      <div className={cx("toolbars-margin")}>
        <a className={cx("link", "current")} href="/">
          Khám phá
        </a>
        <a
          className={cx("link")}
          href="https://shopeefood.vn/?utm_source=FoodyWeb&utm_medium=topbar_link_click&utm_campaign=FoodyRef"
        >
          Đặt giao hàng
        </a>
        <a
          className={cx("link")}
          href="https://shopeefood.vn/?utm_source=FoodyWeb&utm_medium=topbar_link_click&utm_campaign=FoodyRef"
        >
          Đi chợ
        </a>
        <img
          className={cx("img-gif")}
          src="https://www.foody.vn/style/css/strongbow/images/sb-new.gif"
          alt="new"
        />
      </div>
    </div>
  );
}

export default ToolbarsTop;
