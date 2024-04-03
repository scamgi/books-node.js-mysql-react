import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [books, setBooks] = useState([
    {
      id: 0,
      book_title: "lorem",
      book_description: "lorem",
      book_price: 12.99,
      book_cover_link: "link",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books", { method: "GET" })
      .then((chunk) => chunk.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <main>
      <div className="container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div className="book__cover">
              <img src={book.book_cover_link} alt="book cover" />
            </div>
            <h1 className="book__title">{book.book_title}</h1>
            <p className="book__description">{book.book_description}</p>
            <p className="book__price">{book.book_price} &euro;</p>
            <button>Update</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
