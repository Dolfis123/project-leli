import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/public/Beranda";
import About from "./pages/public/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
