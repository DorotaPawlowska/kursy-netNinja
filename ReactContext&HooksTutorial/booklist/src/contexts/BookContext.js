// import React, { createContext, useState, useReducer } from 'react';
import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
// import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [ books, setBooks ] = useState([
  const [ books, dispatch ] = useReducer(bookReducer, [
    // { title: 'book one', author: 'author one', id: 1},
    // { title: 'book two', author: 'author two', id: 2}
  ]);

  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuid()}])
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id));
  // };

  return(
    <BookContext.Provider value={{books, dispatch}}> 
      { props.children }
    </BookContext.Provider>
  );
}

export default BookContextProvider;