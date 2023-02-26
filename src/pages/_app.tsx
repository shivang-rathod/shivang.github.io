import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRef, useCallback, useEffect, useState } from 'react'

import { Compose, Footer, Header } from 'src/components'
import { ThemeContextProvider } from 'src/contexts'
import { useSearchText } from 'src/hooks/useSearchText'

import 'src/styles/globals.scss'

import { sleep } from 'src/utils'
import { Landing } from 'src/screens'

function GoogleSearch({ Component, pageProps }: AppProps) {
  const [landing, setLanding] = useState(true)
  const searchText = useSearchText(1000)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const focus = async () => {
      await sleep(500)
      searchRef.current?.focus()
    }

    focus()
  }, [])

  const onSearchClick = useCallback(() => {
    setLanding(false)
  }, [])

  return (
    <Compose components={[ThemeContextProvider]}>
      <Head>
        <title>Shivang Rathod - Digital Marketer & SEO</title>
        <meta
          name="description"
          content="Shivang Rathod is a Digital Marketing Team Leader at leading Ecommerce Development Company, also an independent SEO-focused content writer and a digital marketing consultant in his free time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="root">
        {landing ? (
          <Landing
            searchText={searchText}
            searchRef={searchRef}
            onSearchClick={onSearchClick}
          />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </div>
    </Compose>
  )
}

export default GoogleSearch
