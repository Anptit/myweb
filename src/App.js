import Foods from "./Components/Foods";
import classNames from "classnames/bind";
import styles from "./Styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

var cx = classNames.bind(styles);

function App() {
  return (
    <div className="App">
      <header className={cx('container')}>
        <button className={cx('menu')}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={cx('header')}>
          <h2>My Food</h2>
        </div>
        <div className={cx('mail')}>
          <h2>Mail</h2>
        </div>
      </header>
      <div>
        <Foods />
      </div>
    </div>
  );
}

export default App;
