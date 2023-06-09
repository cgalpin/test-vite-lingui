import { useEffect } from 'react';
import App from './App';

import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { defaultLocale, dynamicActivate } from './i18n';

const I18nApp = () => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale)
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <App  />
    </I18nProvider>
  )
}
export default I18nApp