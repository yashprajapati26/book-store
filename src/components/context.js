import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [book, setBook] = useState({
    id: null,
    title: "",
    author: "",
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

  return (
    <AppContext.Provider value={{ setBook, book, setBooks, Books }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
