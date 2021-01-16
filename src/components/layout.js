import React from "react"
import Footer from "./Footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
