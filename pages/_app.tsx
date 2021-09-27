import '../styles/globals.css'

import type { AppProps } from 'next/app'

import Layout from 'components/Layout'

function GeneratusWeb({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default GeneratusWeb
