import { useState, useEffect } from 'react';
import { t, Trans } from '@lingui/macro';
import { locales, defaultLocale, dynamicActivate } from './i18n';

const Numbers = () => {
  const numbers = [
    t`one`,
    t`two`,
    t`three`
  ]

  return (
    <ol>
      { numbers.map(number => <li key={number}>{number}</li>) }
    </ol>
  )
}

function App() {
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    dynamicActivate(locale)
  }, [locale])

  return (
    <>
      <div>
        { Object.entries(locales).map( ([locale,name]) => <button key={locale} onClick={() => setLocale(locale)}>{name}</button>) }
        {" "}<Trans>Current Language: {locale}</Trans>
      </div>
      <h1><Trans>Vite + React + Lingui</Trans></h1>
      <Numbers />
    </>
  )
}

export default App
