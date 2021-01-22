import { ThemeProvider } from "@material-ui/core"
import React from "react"
import theme from "../utils/theme/muiTheme"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
