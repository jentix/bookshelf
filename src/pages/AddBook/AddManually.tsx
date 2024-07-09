import React, { useState } from 'react'

import { addBook } from '../../api/indexDB'

export const AddManually: React.FC = () => {
  const [formState, setFormState] = useState({ author: '', title: '' })

  const onAuthorChange = (e) => {
    setFormState((prevState) => ({ ...prevState, author: e.target.value }))
  }

  const onTitleChange = (e) => {
    setFormState((prevState) => ({ ...prevState, title: e.target.value }))
  }

  const addNewBook = async () => {
    if (!formState.author || !formState.title) {
      return
    }

    try {
      await addBook({ title: formState.title, author: formState.author })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="centred-content">
      <input
        type="text"
        id="book-author"
        placeholder="author"
        onChange={onAuthorChange}
        value={formState.author}
      />
      <input
        type="text"
        id="book-title"
        placeholder="title"
        onChange={onTitleChange}
        value={formState.title}
      />
      <button onClick={addNewBook}>Add to shelf</button>
    </div>
  )
}
