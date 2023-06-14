import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "./context";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const { setBook, book, setBooks, Books, toaster, setToaster } =
    useContext(AppContext);
  const navigate = useNavigate();
  const addBookHandler = () => {
    console.log(book);
    if (book.title === null || book.author === null || book.price === null) {
      alert("All Feild is Required", book);
    } else if (book.price === null || book.price === "") {
      alert("Book Price Required");
    } else if (isNaN(book.price)) {
      alert("Please Enter valid book price");
    } else {
      setBooks((prev) => [
        ...prev,
        { ...book, id: Books.length ? Books[Books.length - 1].id + 1 : 1 },
      ]);
      setBook({
        id: null,
        title: "",
        author: "",
        price: null,
      });
      setToaster({ ...toaster, open: true, message: "Book Added Sucessfully" });

      navigate("/book-list");
    }
  };

  return (
    <div>
      <h1 style={{ marginLeft: 55 }}>Add Book</h1>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            m: 5,
          }}
        >
          <label style={{ margin: 3 }}>Book Title </label>
          <input
            style={{ padding: "3px" }}
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
          <label style={{ margin: 3 }}>Author</label>
          <input
            style={{ padding: "3px" }}
            type="text"
            name="author"
            placeholder="Author"
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
          <label style={{ margin: 3 }}>Price</label>
          <input
            style={{ padding: "3px" }}
            type="text"
            name="price"
            placeholder="Price"
            onChange={(e) => setBook({ ...book, price: e.target.value })}
          />
          <Button sx={{ m: 3 }} variant="contained" onClick={addBookHandler}>
            ADD Book
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default AddBook;
