import classnames from "classnames/bind";
import styles from "./SubMenuItems.module.scss";

var cx = classnames.bind(styles);


function SubMenuItems({ subitems, show }) {
    return ( 
        <div className={cx("wrapper",  `${show ? "display" : ""}`)}>
            <ul className={cx("sub-list")}>
                {subitems.map((items, index) => (
                    <li key={index} className={cx("sub-item")}>
                        <a href={items.link}>
                            <img src={items.icon} alt="" className={cx("sub-item-icon")} />
                            <span className={cx("sub-item-name")}>{items.name}</span>
                            <span className={cx("sub-item-amount")}>{items.amount}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default SubMenuItems;