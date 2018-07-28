import React, { Component } from 'react';

class Book extends Component {

  state = {
    value: 'none'
  };

  render() {
    let { book, changeBook } = this.props;
    return (
      <div>
        {}
        <li className = "book">
          <div className = "book-top">
            <div
              className = "book-cover"
              style = {{
               
                backgroundImage: `url(${this.props.book.imageLinks !== undefined ?  
                    this.props.book.imageLinks.smallThumbnail: 'url(http://via.placeholder.com/160*155)'
                                     })`
              }}
            />
            <div className = "book-shelf-changer">
              <select value = {book.shelf} onChange = {event => changeBook(book, event.target.value)}>
                <option value = "none" disabled>
                  Move to...
                </option>
                <option value = "currentlyReading">Currently Reading</option>
                <option value = "wantToRead">Want to Read</option>
                <option value = "read">Read</option>
                <option value = "favourite">Favourite</option>
                <option value = "none">None</option>
              </select>
            </div>
          </div>
          <div className = "book-title">
            {book.title}
          </div>
          <div className="book-authors">
            {book.authors}
          </div>
        </li>
      </div>
    );
  }
}

export default Book;
