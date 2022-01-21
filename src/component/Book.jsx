import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { books } from "../queries/queries";
import BookDetails from "./BookDetails";

function Book() {
  const { loading, error, data } = useQuery(books);
  const [ID, setID] = useState("");

  if (loading) return <p className="loader"></p>;
  if (error) return <p>Server is down :</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, genre, id, author }) => (
          <li key={id} onClick={(e) => setID({ id })}>
            {name}
          </li>
        ))}
      </ul>
      <div id="book-details">
        <BookDetails bookId={ID} />
      </div>
    </div>
  );
}

export default Book;
