import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en/translation.json'
import vi from './vi/translation.json'

const resources = {
  vi: {
    translation: vi,
  },
  en: {
    translation: en,
  },
}

i18n.use(initReactI18next).init({
  lng: 'vi',
  fallbackLng: 'vi',
  debug: true,
  resources,
})

export default i18n
