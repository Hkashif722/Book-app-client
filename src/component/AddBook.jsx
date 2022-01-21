import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthors, addBookMutation, books } from "../queries/queries";

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorid, setAuthorid] = useState("");

  const [addbook] = useMutation(addBookMutation);
  const { loading, error, data } = useQuery(getAuthors);

  if (loading) return <p></p>;
  if (error) return <p>Server is down :</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    addbook({ variables: { name: name, genre: genre, authorid: authorid }, refetchQueries: [{ query: books }] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>Book Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)}></input>
      </div>
      <div className="field">
        <label>Author</label>
        <select onClick={(e) => setAuthorid(e.target.value)}>
          <option>Select Author </option>
          {data.authors.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
