import React, { useState, useLayoutEffect } from 'react'
import localForage from 'localforage'

type BookItem = {
  author: string
  books: string[]
}
type BooksArray = BookItem[]

export const Books: React.FC = () => {
  const [books, setBooks] = useState<BooksArray>([])

  useLayoutEffect(() => {
    const dbBooks = []

    localForage.iterate(function(value, key) {
      dbBooks.push({ author: key, books: value })
    }).then(function() {
        if (dbBooks.length) {
          console.log('dbBooks', dbBooks)
          setBooks(dbBooks)
        }
    }).catch(function(err) {
        console.log(err);
    });
  }, [])

  return (
    <div>
      {books.map(book => (
        <div key={book.author}>
          <h3>{book.author}</h3>
          <ul>
            {book.books.map(title => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
