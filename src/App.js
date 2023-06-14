import React from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="book-list" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
