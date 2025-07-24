import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translation from "./locales.json"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debugger:true,
    returnObjects: true,
    resources:{ 
        en:{translation:translation.en},
        fr:{translation:translation.fr},
        ja:{translation:translation.ja},
        hi:{translation:translation.hi},
        ar:{translation:translation.ar}
    },
    lng:"hi",
    fallbackLng:"hi",
    interpolation:{
        // escapeValue:false
    }
})

export default i18n;