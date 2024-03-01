// import React from "react";
import Book from "./components/book";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import BookInfo from "./components/info";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/bookinfo" element={<BookInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
