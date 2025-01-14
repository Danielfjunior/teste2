import i18n from"i18next";
import { initReactI18next, Translation } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n
.use(initReactI18next)
.init({
    lng: 'en', //Definir linguagem inicial
    fallbacklng: 'pt', // definir um idioma de fallback
    resources: {
        en:{
            Translation: enTranslation,
        },
        pt:{
            Translation: ptTranslation,
        },
    },
    Interpolation:{
        escapeValue: false // Evitar a necessidade de espacart essa sequencia em traduções
    },
});
export default i18;