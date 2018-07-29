import React from 'react';
import Book from './book';

function Bookshelf({books, changeBook, shelf, title}) {
  let nbooks = books;
  let nchangeBook = changeBook;
  let nshelf = shelf;
  let ntitle = title;
  let hayShelf = nbooks.filter(book => book.shelf === nshelf);

  return (
    <div className = "bookshelf">
      <h2 className = "bookshelf-title">
        {ntitle}
      </h2>
      <div className = "bookshelf-books">
        <ol className = "books-grid">
          {hayShelf.map(book => <Book changeBook={nchangeBook} book = {book} key = {book.id} />)}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
