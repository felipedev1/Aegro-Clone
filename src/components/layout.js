import React from "react"

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
