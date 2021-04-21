import en from './locale/en.json';
import pl from './locale/pl.json';
import ru from './locale/ru.json';

export const messages: any = {
  en: en,
  pl: pl,
  ru: ru,
};

export const appLang: string = setAppLang();

function setAppLang() {
  const language = navigator.language.split(/[-_]/)[0];

  if (language === 'pl') {
    return 'pl';
  }
  if (language === 'ru') {
    return 'ru';
  }
  return 'en';
}
