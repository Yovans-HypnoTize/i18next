import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  const { t } = useTranslation()
  const { yuvaraj, yogesh } = t("imHereForYou")

  return (
    <>
      <h3>
        <LanguageSwitcher />
        {t("helloMaster")}
      </h3>
      <span>
        <Trans i18nKey={yuvaraj} values={{
          YOVAN: "YOVAN"
        }} components={{1:<b/>}}/>
        <Trans i18nKey={yogesh} values={{
          YOVAN: "YOVAN"
        }} components={{1:<b/>}}/>
      </span>
      
    </>
  )
}

export default App
