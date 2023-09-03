import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home"; // 파일명 시작을 대문자로 하면 오류생김
import About from "./pages/about";
import Counter from "./pages/counter";
import Input from "./pages/input";


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">about</Link> |
        <Link to="/counter">counter</Link> |
        <Link to="/input">input</Link> |
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
