import React from 'react'
import { Link } from 'react-router-dom'
import classes from './empty-shelf.module.css'

export const EmptyShelf: React.FC = () => {
  return (
    <div className={`centred-content ${classes.fullHeightColumn}`}>
      <h1>This page intentionally left blank</h1>
      <Link to="add-new-book">
        <button>Add my first book</button>
      </Link>
    </div>
  )
}
