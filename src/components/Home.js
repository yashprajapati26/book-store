import React, { useContext } from "react";
import Header from "./Header";
import { AppContext } from "./context";

function Home() {
  const { Books } = useContext(AppContext);
  return (
    <div className="mx-32">
      <h1 className="text-center text-2xl font-bold my-5">
        Welcome To Book Store
      </h1>
      <div className="flex flex-wrap">
        {Books.map((book) => (
          <div className="h-56 w-40 m-12">
            <div>
              <img
                className="h-48 w-fit"
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*zBRkcBbsjWzcPjtcxqhb3Q.jpeg"
              ></img>
            </div>
            <div>
              <h1 className="text-sm font-bold my-2">{book.title}</h1>
              <h1 className="text-sm my-2">Author : {book.author}</h1>
              <h1 className="text-sm my-2">price :{book.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
