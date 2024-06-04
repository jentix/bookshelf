import React from 'react'
import { Link } from 'react-router-dom'

export const AddBook: React.FC = () => {
  return (
    <div className="centred-content">
      <input type="text" id="book-search" />
      <Link to="manually">
        <button>Add manually</button>
      </Link>
    </div>
  )
}
