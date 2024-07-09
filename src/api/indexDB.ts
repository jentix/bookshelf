import { openDB, DBSchema } from 'idb'

import type { Book } from './types'

interface BookshelfDB extends DBSchema {
  books: {
    value: {
      id?: number
      title: string
      author: string
    }
    key: number
    indexes: {
      title_idx: string
      author_idx: string
    }
  }
}

export const openBookshelfDB = async () => {
  const db = await openDB<BookshelfDB>('Bookshelf', 1, {
    upgrade(db) {
      // if (!db.objectStoreNames.contains('authors')) {
      //   const authorsStore = db.createObjectStore('authors', {
      //     keyPath: 'id',
      //     autoIncrement: true,
      //   })

      //   authorsStore.createIndex('name_idx', 'name', { unique: true })
      // }

      if (!db.objectStoreNames.contains('books')) {
        const booksStore = db.createObjectStore('books', {
          keyPath: 'id',
          autoIncrement: true,
        })

        booksStore.createIndex('title_idx', 'title')
        booksStore.createIndex('author_idx', 'author')
      }
    },
  })

  return db
}

export const getAllBooks = async (): Promise<Book[]> => {
  const db = await openBookshelfDB()
  const tx = db.transaction('books', 'readonly')

  const books = []

  for await (const cursor of tx.store) {
    books.push(cursor.value)
  }

  return books
}

export const addBook = async (book: { title: string; author: string }) => {
  const db = await openBookshelfDB()
  const books = db.transaction('books', 'readwrite')

  await books.store.add(book)
}
