import React, { useContext, useState } from "react";
import "../index.css";
import { AppContext } from "./context";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

function BookList() {
  // for toaster
  const { Books, setBooks, toaster, setToaster } = useContext(AppContext);
  const [searchBooks, setsearchBooks] = useState(Books);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToaster({ ...toaster, open: false });
  };
  const deleteBook = (bookId) => {
    setToaster({ ...toaster, open: true, message: "Book Deleted Sucessfully" });
    setBooks(Books.filter((book) => book.id !== bookId));
  };

  const searchHAndler = (event) => {
    let searchKey = event.target.value;
    setsearchBooks(Books.filter((book) => book.title.includes(searchKey)));
  };

  const sortHandler = (key) => {
    console.log(key);
    const newBooks = [...searchBooks];
    if (key === "id") {
      newBooks.sort((a, b) => b.id - a.id);
      setsearchBooks(newBooks);
    } else if (key === "title") {
      newBooks.sort((a, b) => a.title.localeCompare(b.title));
      setsearchBooks(newBooks);
    } else if (key === "author") {
      newBooks.sort((a, b) => a.title.localeCompare(b.title));
      setsearchBooks(newBooks);
    } else if (key === "price") {
      newBooks.sort((a, b) => a.title.localeCompare(b.title));
      setsearchBooks(newBooks);
    }
  };

  return (
    <div>
      <h1 style={{ marginLeft: 55 }}>BookList</h1>
      <div style={{ margin: 55 }}>
        <label>Search :</label>
        <input
          type="text"
          style={{ margin: "8px", padding: "8px" }}
          placeholder="search here"
          onChange={searchHAndler}
        ></input>
        <table>
          <thead>
            <tr>
              <th onClick={() => sortHandler("id")}>Id ^</th>
              <th onClick={() => sortHandler("title")}>Book Title ^</th>
              <th onClick={() => sortHandler("author")}>Auther ^</th>
              <th onClick={() => sortHandler("price")}>Price ^</th>
              <th>Action</th>
            </tr>
          </thead>
          {searchBooks.length > 0 ? (
            <tbody>
              {searchBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td style={{ color: "red" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ height: "25" }}
                      onClick={() => deleteBook(book.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No Book
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      {/* toaster */}
      <Snackbar
        open={toaster.open}
        autoHideDuration={2000}
        anchorOrigin={toaster}
        onClose={handleClose}
      >
        <Alert severity="success">{toaster.message}</Alert>
      </Snackbar>
    </div>
  );
}

export default BookList;
