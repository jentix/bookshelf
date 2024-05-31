import React from 'react'
import ReactDOM from 'react-dom/client'
import localForage from 'localforage'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { EmptyShelf } from './pages/EmptyShelf'
import { AddBook } from './pages/AddBook'
import { AddManually } from './pages/AddBook/AddManually'
import { Books } from './pages/Books'
import './index.css'

localForage.config({
  name: 'book-shelf'
})

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
