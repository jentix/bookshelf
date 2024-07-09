import React from 'react'
import { useLoaderData } from 'react-router-dom'

import { Menu, MenuLinkItem } from '../../components/Menu'
import PlusIcon from '../../components/Icons/plus.svg'

import type { Book } from '../../api/types'

export const Books: React.FC = () => {
  const books = useLoaderData() as Book[]

  return (
    <>
      <Menu>
        <MenuLinkItem url="/add-new-book">
          <img src={PlusIcon} />
        </MenuLinkItem>
      </Menu>
      <div>
        {books.map((book) => (
          <div key={book.id} style={{ marginBottom: '36px' }}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
          </div>
        ))}
      </div>
    </>
  )
}
