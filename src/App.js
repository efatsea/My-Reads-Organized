import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Bookshelf from './bookshelf';
import Search from './searchbar';

class App extends Component {

  state = {
    books: []
  }

//componentDidMount lifecycle 
  componentDidMount(){
    BooksAPI.getAll().then(allBooks =>
      this.setState({books:allBooks})
    )
  }

//change book and self place from github.com/danusk
  changeBook(book, newShelf) {
        const books = this.state.books
        let foundBook = false
        books.forEach((b, index) => {
            if (b.id === book.id) {
                b.shelf = newShelf
                this.setState({ books })
                foundBook = true
            }
        })

        if (!(foundBook)) {
            book.shelf = newShelf
            books.push(book)
            this.setState({ books })
        }

        BooksAPI.update(book, newShelf)
    }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MY BOOKS APP</h1>
              </div>
              <div className="list-books-content">
                  <div>
                    <Bookshelf
                      title="Currently Reading"
                      books={ this.state.books }
                      changeBook={ this.changeBook.bind(this) }
                      shelf={ `currentlyReading` }  
                    />
                    <Bookshelf
                      title="Want to read"
                      books={ this.state.books }
                      changeBook={ this.changeBook.bind(this) }
                      shelf={ `wantToRead` }
                    />
                    <Bookshelf
                      title="Already Read"
                      books={ this.state.books }
                      changeBook={ this.changeBook.bind(this) }
                      shelf={ `read` }
                    />
                    <Bookshelf
                      title="My Favourites"
                      books={ this.state.books }
                      changeBook={ this.changeBook.bind(this) }
                      shelf={ `favourite` }
                    />
                    
                  </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>}
        />
        <Route
            path="/search"
            render={({ history }) => 
            <Search books={this.state.books} changeBook={this.changeBook.bind(this)} />}
        />

      </div>
    );
  }
}

export default App;
