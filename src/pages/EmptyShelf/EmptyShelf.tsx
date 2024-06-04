import React from 'react'
import { Link } from 'react-router-dom'
import classes from './emptyshelf.module.css'

export const EmptyShelf: React.FC = () => {
  const addNewBook = () => {}

  return (
    <div className={`centred-content ${classes.fullHeightColumn}`}>
      <h1>This page intentionally left blank</h1>
      <Link to="add-new-book">
        <button onClick={addNewBook}>Add my first book</button>
      </Link>
    </div>
  )
}
