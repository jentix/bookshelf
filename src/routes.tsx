import { createBrowserRouter } from 'react-router-dom'

import { EmptyShelf } from './pages/EmptyShelf'
import { AddBook } from './pages/AddBook'
import { AddManually } from './pages/AddBook/AddManually'
import { Books } from './pages/Books'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <EmptyShelf />,
  },
  {
    path: 'add-new-book',
    element: <AddBook />,
  },
  {
    path: 'add-new-book/manually',
    element: <AddManually />,
  },
  {
    path: 'books',
    element: <Books />,
  },
])
