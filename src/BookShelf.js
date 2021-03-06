import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

/**
* @description Stateless Functional Component that represent every Shelf.
* @param {object} props - the object passed from the Parent component.
*/
const BookShelf = (props) => {

  //Destructuring the props object
  const { books, thisShelf, shelfOptions, onShelfChange } = props;

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{thisShelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/**
          * We map over the array of books and create a new Book
          * Component for each one of them. Passing:
          *** book - the book it self
          *** shelfOptions - the options for changing the shelves
          *** onShelfChange - Function to change between Shelves
          */}
          {(books) && (books.map(book =>
              <li key={book.id}>
                <Book
                  book={book}
                  shelfOptions={shelfOptions}
                  onShelfChange={onShelfChange}/>
              </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTyps = {
  books: PropTypes.array.isRequired,
  thisShelf: PropTypes.object.isRequired,
  shelfOptions: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelf;