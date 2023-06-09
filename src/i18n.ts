import { i18n } from '@lingui/core';

interface Locales {
    en: string;
    es: string;
}

export const locales: Locales = {
  en: "English",
  es: "Español",
};
export const defaultLocale = "en";

/**
* We do a dynamic import of just the catalog that we need
* @param locale any locale string
*/
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`./locales/${locale}/messages.po`)
  i18n.load(locale, messages)
  i18n.activate(locale)
  console.log("Activated " + locale)
}