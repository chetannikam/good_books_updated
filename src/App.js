import "./styles.css";
import React, { useState } from "react";
var collection = {
  spiritual: [
    { name: "satyarth prakash", rating: "4/5" },
    { name: "bhagwadgita", rating: "5/5" },
    { name: "power of subconcious mind", rating: "4/5" }
  ],
  fictional: [
    { name: "Harry potter", rating: "4/5" },
    { name: "Game of thrones", rating: "3/5" },
    { name: "Lord of rings", rating: "4/5" }
  ],
  sports: [
    { name: "God of cricket", rating: "4/5" },
    { name: "Insider out", rating: "3/5" },
    { name: "The Wall", rating: "4/5" }
  ]
};

export default function App() {
  var [selected_genre, setgener] = useState("sports");
  function select_genre(genre) {
    setgener(genre);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>{" "}
      <p>Checkout my favourite book and select a gener to get started</p>{" "}
      {Object.keys(collection).map((genre) => (
        <button onClick={() => select_genre(genre)}>{genre}</button>
      ))}
      <hr />
      {
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0px" }}>
            {collection[selected_genre].map((book) => (
              <li key={book.name}>
                <div style={{ fontSize: "larger" }}> {book.name}</div>
                <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
