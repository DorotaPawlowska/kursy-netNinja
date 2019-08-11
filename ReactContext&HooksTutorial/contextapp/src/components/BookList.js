// import React, { Component, useContext } from 'react';
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {

//   static contextType = ThemeContext;
//   render() { 
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div style={{ color: theme.syntax, background: theme.bg }} className="book-list">
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }

// }

const BookList = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div style={{ color: theme.syntax, background: theme.bg }} className="book-list">
      <ul>
        {books.map( book => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>{ book.title }</li>
          )
        })}
      </ul>
    </div>
  );

}

export default BookList;
