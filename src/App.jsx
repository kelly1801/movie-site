import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from './movie-site/src/pages/SearchPage.jsx'
import Home from "./pages/Home";

import Footer from "./components/footer";
import MovieInfo from "./pages/movieInfo";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/search/:id" element={<MovieInfo />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
