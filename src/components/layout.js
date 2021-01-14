import React from "react"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div>
        {children}
      </div>
      <footer>
        
      </footer>
    </>
  )
}

export default Layout
