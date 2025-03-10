import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React, { useContext, useState } from "react";
import "../index.css";
import AddBook from "./AddBook";
import { AppContext } from "./context";

function BookList() {
  // for toaster
  const { Books, setBooks, toaster, setToaster, book, setBook, edit ,setEdit } =
    useContext(AppContext);
  const [filterBooks, setfilterBooks] = useState(Books);
  const [direction, setDirection] = useState(1);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToaster({ ...toaster, open: false });
  };

  const deleteBook = (bookId) => {
    setToaster({ ...toaster, open: true, message: "Book Deleted Sucessfully" });
    setfilterBooks(filterBooks.filter((book) => book.id !== bookId));
    setBooks(filterBooks.filter((book) => book.id !== bookId));
  };

  const editBook = (bookId) => {
    setBook(filterBooks.find((book) => book.id === bookId));
    console.log("bookData : ", book);
    setEdit(true);
  };

  const searchHAndler = (event) => {
    let searchKey = event.target.value;
    setfilterBooks(
      Books.filter((book) =>
        book.title.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  };

  const sortHandler = (key) => {
    console.log(key);
    setDirection(direction * -1);
    const newBooks = [...filterBooks];
    if (key === "id") {
      newBooks.sort((a, b) => (b.id - a.id) * direction);
      setfilterBooks(newBooks);
    } else if (key === "title") {
      newBooks.sort((a, b) => a.title.localeCompare(b.title) * direction);
      setfilterBooks(newBooks);
    } else if (key === "author") {
      newBooks.sort((a, b) => a.author.localeCompare(b.author) * direction);
      setfilterBooks(newBooks);
    } else if (key === "price") {
      newBooks.sort((a, b) => (b.price - a.price) * direction);
      setfilterBooks(newBooks);
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
              <th onClick={() => sortHandler("id")}>
                Id {direction === 1 ? <span>↑</span> : <span>↓</span>}
              </th>
              <th onClick={() => sortHandler("title")}>
                Book Title {direction === 1 ? <span>↑</span> : <span>↓</span>}
              </th>
              <th onClick={() => sortHandler("author")}>
                Auther {direction === 1 ? <span>↑</span> : <span>↓</span>}
              </th>
              <th onClick={() => sortHandler("price")}>
                Price {direction === 1 ? <span>↑</span> : <span>↓</span>}
              </th>
              <th>Action</th>
            </tr>
          </thead>
          {filterBooks.length > 0 ? (
            <tbody>
              {filterBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ height: "25", color: "red" }}
                      onClick={() => deleteBook(book.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ height: "25", color: "blue" }}
                      onClick={() => editBook(book.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
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

      {edit ? <AddBook title="Edit Book" bookData={book} isEdit={edit}/> : <></>}
    </div>
  );
}

export default BookList;
