import React  ,{useContext} from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import "./index.css";
import { AppContext } from "./components/context";
import { isDesktop} from 'react-device-detect';

function App() {
  const { book, edit } = useContext(AppContext);

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="add-book" element={<AddBook title="Add Book" bookData={book} isEdit={edit}/>} />
        <Route path="book-list" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
