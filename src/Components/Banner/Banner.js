import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

var cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner")}>
      <a className={cx("banner-link")} href="/ung-dung-mobile" target="_blank">
        <img
          src="https://images.foody.vn/biz_banner/foody-675x355_foodyappbanner-636530746968443602.jpg"
          alt="banner"
        />
      </a>
      <div className={cx("banner-caption")}>
        <span className={cx("banner-caption-name")}>Foody App trên Mobile</span>
        <span className={cx("banner-caption-desc")}>
          Khám phá, đặt bàn, giao tận nơi
        </span>
      </div>
    </div>
  );
}

export default Banner;
