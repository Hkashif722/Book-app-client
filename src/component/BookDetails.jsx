import React from "react";
import { getBookDetails } from "../queries/queries";
import { useQuery } from "@apollo/client";

function BookDetails(props) {
  console.log(props.bookId.id);

  const { loading, error, data } = useQuery(getBookDetails, { variables: { id: props.bookId.id } });
  if (loading) return <p className="loader"></p>;

  if (error) return <p>No Book selected</p>;
  console.log(data);
  let value = data.book;
  return (
    <div>
      <h1>Book Details</h1>
      <h2>{value.name}</h2>
      <p>{value.genre}</p>
      <p>{value.author.name}</p>
      <p>List of Books by {value.author.name}</p>

      {value.author.books.map(({ name, genre, id }) => (
        <ul className="other-books" key={id}>
          <li>{name}</li>
          <li>{genre}</li>
        </ul>
      ))}
    </div>
  );
}

export default BookDetails;
