import React from 'react'
import { useLoaderData } from 'react-router-dom'

import type { Book } from '../../api/types'

export const Books: React.FC = () => {
  const books = useLoaderData() as Book[]

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
      ))}
    </div>
  )
}
