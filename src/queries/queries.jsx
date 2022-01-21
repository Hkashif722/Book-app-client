import { gql } from "@apollo/client";

const books = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorid: ID!) {
    addbook(name: $name, genre: $genre, authorid: $authorid) {
      name
      id
    }
  }
`;

const getBookDetails = gql`
  query ($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
        name
        id
        books {
          name
          genre
          id
        }
      }
    }
  }
`;

export { books, getAuthors, addBookMutation, getBookDetails };
