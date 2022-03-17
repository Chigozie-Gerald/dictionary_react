import "./App.css";
import "./material-design-icons-iconfont-master/dist/material-design-icons.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DragBox from "./dragBox/dragBox";
// import Dictionary from "./dictionary/dictionary";

function App() {
  return (
    <div className="App h100 w100">
      <Router>
        <Routes>
          {/*<Route exact path="/" render={(props) => <DragBox />} />*/}
          {/* Dynamically creating routes */}
          <Route path="/" element={<DragBox />} />
          {/* <Route path="/dictionary" element={<Dictionary />} /> */}
          <Route exact render={(props) => <div>Not found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
