import i18n from 'i18next';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .use(backend)
    .init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export const locales = [
    "en",
    "nb_NO",
]

export default i18n;
