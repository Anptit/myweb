import classnames from "classnames/bind";
import styles from "./App.module.scss";
import ToolbarsTop from "./Components/Toolbars/ToolbarsTop/ToolbarsTop";
import Header from "./Components/Toolbars/Header/Header";
import Banner from "./Components/Banner/Banner";

var cx = classnames.bind(styles);

function App() {
  return (
    <div className={cx("app")}>
      <header className={cx("toolbars")}>
        <ToolbarsTop />
        <Header />
      </header>
      <main>
        <Banner />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
