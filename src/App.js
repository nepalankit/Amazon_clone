import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={[<Header />, <h1>I am a checkout page</h1>]}
          />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </Router>
    //just a test
  );
}

export default App;
