import React from "react";

import Book from "./Book";
import AddBook from "./AddBook";

function App() {
  return (
    <div id="main">
      <h1>List of Books</h1>
      <Book />
      <AddBook />
    </div>
  );
}

export default App;
