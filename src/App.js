import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={[<Checkout />]} />

          <Route path="/Home" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
    //just a test
  );
}

export default App;
