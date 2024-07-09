import React from 'react'
import { Link } from 'react-router-dom'

import classes from './menu.module.css'

export const Menu: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.menuContainer}>{children}</div>
}

type MenuItemProps = {
  onClick?: () => void
  children?: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ onClick, children }) => {
  return (
    <div className={classes.menuItemContainer} onClick={onClick}>
      {children}
    </div>
  )
}

type MenuLinkItemProps = {
  url: string
  onClick?: () => void
  children?: React.ReactNode
}

export const MenuLinkItem: React.FC<MenuLinkItemProps> = ({ onClick, url, children }) => {
  return (
    <Link to={url}>
      <div className={classes.menuItemContainer} onClick={onClick}>
        {children}
      </div>
    </Link>
  )
}
