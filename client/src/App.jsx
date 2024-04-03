import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="container">
        <div className="book">
          <div className="book__cover">
            <img src="qualcosa.jpg" alt="book cover" />
          </div>
          <h1 className="book__title">Book title</h1>
          <p className="book__description">Description</p>
          <p className="book__price">Price</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
        <div className="book">
          <div className="book__cover">
            <img src="qualcosa.jpg" alt="book cover" />
          </div>
          <h1 className="book__title">Book title</h1>
          <p className="book__description">Description</p>
          <p className="book__price">Price</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </main>
  );
}

export default App;
