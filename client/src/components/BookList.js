import { useQuery } from "@apollo/client";
import { useState } from "react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState();

  const displayBooks = () => {
    if (loading) return <div>Loading Books...</div>;
    else if (error) return <div>Error Loading Books...</div>;
    else {
      return data.books.map((book) => {
        return (
          <li key={book.id} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        );
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
