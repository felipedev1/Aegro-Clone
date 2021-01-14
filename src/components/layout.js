import React from "react"
import {  } from '@material-ui/core'

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <footer>
        
      </footer>
    </>
  )
}

export default Layout
