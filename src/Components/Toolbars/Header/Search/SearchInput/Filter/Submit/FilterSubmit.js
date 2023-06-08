import classnames from "classnames/bind";
import styles from "./FilterSubmit.module.scss";

var cx = classnames.bind(styles);

function Submit() {
  return (
    <div className={cx("filter-submit")}>
      <button className={cx("filter-search")}>Tìm kiếm</button>
      <button className={cx("filter-delet")}>Xóa bộ lọc</button>
    </div>
  );
}

export default Submit;
