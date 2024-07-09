import { createBrowserRouter, redirect } from 'react-router-dom'

import { getAllBooks } from './api/indexDB'
import { EmptyShelf } from './pages/EmptyShelf'
import { AddBook } from './pages/AddBook'
import { AddManually } from './pages/AddBook/AddManually'
import { Books } from './pages/Books'

async function getMyBooks() {
  return getAllBooks()
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <EmptyShelf />,
    loader: async () => {
      const books = await getMyBooks()
      if (books.length) {
        return redirect('/books')
      }
      return books
    },
  },
  {
    path: '/empty',
    element: <EmptyShelf />,
  },
  {
    path: '/add-new-book',
    element: <AddBook />,
  },
  {
    path: '/add-new-book/manually',
    element: <AddManually />,
  },
  {
    path: '/books',
    element: <Books />,
    loader: async () => {
      const books = await getMyBooks()
      return books
    },
  },
])
