import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
  });

  const [Books, setBooks] = useState([
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 999,
    },
    {
      title: "Angular — The Complete Guide",
      author: "Maximilian Schwarzmuller",
      price: 1999,
    },
    {
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
