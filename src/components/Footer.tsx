import "./Footer.scss"

import React, { ReactElement } from "react"
import ThemeChanger from "./ThemeChanger"
import Web3Status from "./Web3Status"

const Footer = (): ReactElement => {
  return (
    <div className="container">
      <Web3Status />
      <ThemeChanger />
    </div>
  )
}

export default Footer
