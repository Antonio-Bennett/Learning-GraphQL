import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading Authors...</option>;
    else if (error) return <option disabled>Error Loading Authors...</option>;
    else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>

        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>

        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author:</label>

        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
