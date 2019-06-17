import ReactNative from "react-native";
import I18n from "react-native-i18n";

// Import all locales
import en from "./en.json";
import ar from "./ar.json";

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  ar
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf("ar") === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export function setLanguage(lang) {
  I18n.language = lang;
}

export default I18n;
