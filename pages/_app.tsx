import '../styles/globals.css'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'

import Layout from 'components/Layout'

function GeneratusWeb({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    window.solana?.connect({ onlyIfTrusted: true });
    if (window.solana?.isConnected && router.pathname != "/onboarding") {
      router.push('/onboarding')
    }
  })

  return <Component {...pageProps} />
}

export default GeneratusWeb
