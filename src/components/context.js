import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [book, setBook] = useState({
    id: null,
    title: null,
    author: null,
    price: null,
  });

  const [Books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 999,
    },
    {
      id: 2,
      title: "Angular — The Complete Guide",
      author: "Maximilian Schwarzmuller",
      price: 1999,
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "MORGAN HOUSEL",
      price: 499,
    },
  ]);

  const [toaster, setToaster] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message:"",
  });

  const [edit, setEdit] = useState(false);


  return (
    <AppContext.Provider value={{ setBook, book, setBooks, Books , setToaster, toaster,edit,setEdit}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
