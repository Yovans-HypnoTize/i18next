import i18next from 'i18next'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
    {code:"en",lang:"English"},
    {code:"fr",lang:"French"},
    {code:"ja",lang:"Japanese"},
    {code:"hi",lang:"Hindi"},
    {code:"ar",lang:"Arabic"},
]

const LanguageSwitcher = () => {
    const {i18n} = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    useEffect(() => {
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])
  return (
    <div>
        {
            languages.map((lng)=>{
                return <button key={lng.code} className={lng.code === i18n.language ? "selected":""} onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
            })
        }
    </div>
  )
}

export default LanguageSwitcher