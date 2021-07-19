import "./Footer.scss"

import React, { ReactElement } from "react"

import { useTranslation } from "react-i18next"

const Footer = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <div className="container">
      {t("A collaboration project between")} <a>Dhalia Finance</a> {t("and")}{" "}
      <a>OpenCelo</a>
    </div>
  )
}

export default Footer
