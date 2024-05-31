import React, { useState } from 'react'
import localForage from 'localforage'

export const AddManually: React.FC = () => {
  const [formState, setFormState] = useState({ author: '', title: '' })

  const onAuthorChange = (e) => {
    setFormState(prevState => ({...prevState, author: e.target.value }))
  }

  const onTitleChange = (e) => {
    setFormState(prevState => ({...prevState, title: e.target.value }))
  }

  const addNewBook = async () => {
    if (!formState.author || !formState.title) {
      return;
    }

    try {
      const authorBooks = await localForage.getItem(formState.author)
      console.log('authorBooks', authorBooks)
  
      if (!authorBooks) {
        const result = await localForage.setItem(formState.author, [formState.title])
        console.log('result', result)
      } else if (Array.isArray(authorBooks)) {
        const result = await localForage.setItem(formState.author, [...authorBooks, formState.title])
        console.log('result', result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='centred-content'>
      <input type="text" id="book-author" placeholder='author' onChange={onAuthorChange} value={formState.author} />
      <input type="text" id="book-title" placeholder='title' onChange={onTitleChange} value={formState.title} />
      <button onClick={addNewBook}>Add to shelf</button>
    </div>
  )
}
