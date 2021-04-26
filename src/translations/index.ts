import en from './locale/en.json';
import pl from './locale/pl.json';
import ru from './locale/ru.json';
import { Json } from '../types/translations/translations';

export const messages: Json = {
    en,
    pl,
    ru
};

const language = navigator.language.split(/[-_]/)[0];

export const appLang: string = setAppLang(language);

function setAppLang(language: string): string {
    switch (language) {
        case 'pl':
            return 'pl';
        case 'ru':
            return 'ru';
        default:
            return 'en';
    }
}

export default setAppLang;
