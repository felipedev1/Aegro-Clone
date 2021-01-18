import { ThemeProvider } from "@material-ui/core"
import React from "react"
import theme from "../utils/theme/muiTheme"
import Footer from "./Footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
