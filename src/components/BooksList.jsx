import React from "react";
import books from "../books.jsx";

function BooksList() {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Genre: {book.genre}</p>
            <img src={book.cover} alt={`${book.title} cover`} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
