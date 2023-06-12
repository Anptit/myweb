import classnames from "classnames/bind";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

var cx = classnames.bind(styles);

function App() {
  return (
    <div className={cx("app")}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
